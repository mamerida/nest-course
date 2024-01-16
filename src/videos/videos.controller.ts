import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videosService.create(createVideoDto);
  }

  @Get() //use query to get params that come in url
  findAll(@Query() query:string) { //@Query() query:string all query // @Query('id') query:string paramID 
    return this.videosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) { //esto se utiliza para usar params llamado id ej http://localhost:3000/videos/video-1
    return this.videosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(+id);
  }
}
