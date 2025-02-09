import { Injectable, OnModuleInit } from '@nestjs/common';
import { create, Whatsapp } from 'venom-bot';


@Injectable()
export class WhatsappService implements OnModuleInit {
  private client: Whatsapp;

  async onModuleInit() {
    this.client = await create({
      session: 'bot-session',
      headless: 'new', // Força o novo modo Headless
      browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'], // Evita permissões problemáticas
    });

    console.log('✅ Bot do WhatsApp iniciado!');
    this.listenMessages();
    this.stickerMessage();
  }

  async sendMessage(phone: string, message: string) {
    if (!this.client) {
      throw new Error('Cliente do WhatsApp não iniciado.');
    }

    try {
      await this.client.sendText(`${phone}@c.us`, message);
      console.log(`📩 Mensagem enviada para ${phone}: ${message}`);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  }
  private listenMessages() {
    this.client.onMessage(async (message) => {
      if (message) {
        console.log(`Mensagem no grupo ${message.chat.name}: ${message.body}`);

        if (message.body.toLowerCase().includes('ajuda')) {
          await this.client.sendText(message.from, 'Como posso te ajudar? 🤖');
        }
      }
    });
  }
  private stickerMessage() {
    this.client.onMessage(async (message) => {
      if (message.isGroupMsg && message.isMedia && message.type === 'image' && message.caption?.toLowerCase() === '!sticker') {
        console.log(`📸 Imagem recebida com comando no grupo ${message.chat.name}`);

        try {
          const mediaData = await this.client.downloadMedia(message); // Retorna uma string Base64
          await this.client.sendImageAsSticker(
            message.from,
            `data:image/jpeg;base64,${mediaData}` // Removido o .toString('base64')
          );

          console.log('✅ Sticker enviado com sucesso!');
        } catch (error) {
          console.error('❌ Erro ao criar sticker:', error);
          await this.client.sendText(message.from, 'Ocorreu um erro ao criar a figurinha. 😢');
        }
      }
    });
  }

}