import { Module } from '@nestjs/common';
import { JobPostController } from '../controllers/JobPost.controller';
import { JobPostService } from '../services/JobPost.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPostEntity } from '../models/JobPost.entity';


//  TypeOrmModule.forFeature([JobPostEntity])
@Module({
  imports:[TypeOrmModule.forFeature([JobPostEntity])],
  controllers: [JobPostController],
  providers: [JobPostService]
})
export class JobPostModule {}
