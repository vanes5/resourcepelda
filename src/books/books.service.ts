import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  bookList: Book[] = [
    {
      id: 0,
      title: "kismalacok",
      author:"Lajos",
      isbn: "efgyedi0",
      publishYear: 2015,
      reserved: false
    },
    {
      id: 1,
      title: "nem",
      author:"ne lajos",
      isbn: "ne egyed ",
      publishYear: 2000,
      reserved: true
    }
  ];
  nextID :number = 2;

  create(createBookDto: CreateBookDto) {
    this.bookList.push({
      ...createBookDto,
      id: this.nextID,
      reserved: false
    });
    this.nextID++;
  }

  findAll() {
    return this.bookList;
  }

  findOne(id: number) {
    let talalt = false;
    this.bookList.forEach(element => {
      if(element.id == id){
        talalt = true;
      }
    });
    
    if (!talalt) {
      throw new NotFoundException("Nincs ilyen book:(");
    }
    else{
      return this.bookList[id];

    }
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    this.bookList.forEach(element => {
      if(element.id == id){
      }
    });
  }

  
  remove(id: number) {
    let talalt = false;
    this.bookList.forEach(element => {
      if(element.id == id){
        let index = this.bookList.findIndex(d => d.id == id);
        this.bookList.splice(index,1);
        talalt = true;
        return;
      }
    });
    if(!talalt){
      throw new NotFoundException("Nincs ilyen book:(");
    }
  }
}
