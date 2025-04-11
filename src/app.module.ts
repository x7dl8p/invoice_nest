import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { CostumerModule } from './modules/costumer/costumer.module';

@Module({
  imports: [InvoicesModule, CostumerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
