import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { OfferStatus } from '../constants/OfferStatus.enum';

export class OfferSearchInput {
  @IsOptional()
  @IsString()
  restaurantName = '';

  @IsOptional()
  @IsString()
  sellerName = '';

  @IsOptional()
  @IsString()
  name = '';

  @IsOptional()
  @IsString({ each: true })
  categories: string[] = [];

  @IsOptional()
  @IsEnum(OfferStatus)
  status: OfferStatus;

  @IsInt()
  @Min(0)
  currentPage = 0;

  @IsInt()
  @Min(0)
  perPage: number;
}
