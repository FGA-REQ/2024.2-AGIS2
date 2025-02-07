import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>("roles", context.getHandler());
    if (!roles) return true;
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(" ")[1];
    if (!token) return false;
    // console.log(token);
    try {
      const decoded = await this.jwtService.verifyAsync(token, {secret: process.env.JWT_SECRET});
      console.log(decoded);
      const userRole = decoded.role;
      return roles.some((role) => userRole.includes(role));
    } catch (error) {
      return false;
    }
  }
}