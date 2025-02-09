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

    try {
      const decoded = await this.jwtService.verifyAsync(token, {secret: process.env.JWT_SECRET});
      const userRoles = decoded.roles;
      return roles.some((role) => userRoles.includes(role));
    } catch (error) {
      return false;
    }
  }
}