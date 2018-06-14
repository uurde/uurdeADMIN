import { BaseModel } from "./base.model";

export class MovieModel extends BaseModel{
    movieId: number;
    movieName: string;
    directorName: string;
    moviewReleaseDate: Date;
    moviePosterPath: string;
    movieMediaTypeId: number;
    movieMediaTypeName: string;
}