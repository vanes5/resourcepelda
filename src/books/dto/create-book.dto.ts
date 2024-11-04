import { IsBoolean, IsDefined, IsNumber, IsString, Min } from "class-validator"

export class CreateBookDto {
    @IsDefined({
        message: "A book is required"
    })

    @IsDefined()
    @IsString()
    title: string

    @IsDefined()
    @IsString()
    author: string

    @IsDefined()
    @IsString()
    isbn: string

    @IsDefined()
    @IsNumber()
    publishYear: number
}
