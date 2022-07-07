import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { OfferImage } from './offer-images.model';
import { OfferCategory } from './offer-category.model';
import { User } from '../../user/models/user.model';
import { Index } from 'typeorm';
import { OfferStatus } from '../constants/OfferStatus.enum';

@Entity()
@Index('offer_indexes', ['id', 'name'])
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.incomingOffer, { eager: true })
  restaurant: User;

  @ManyToOne(() => User, (user) => user.offeredOffer, { eager: true })
  seller: User;

  @Column()
  name: string;

  @Column('double')
  price: number;

  @OneToMany(() => OfferImage, (image) => image.offer, { eager: true })
  images: OfferImage[];

  @ManyToMany(() => OfferCategory, { eager: true })
  @JoinTable()
  categories: OfferCategory[];

  @Column({ type: 'mediumtext' })
  description: string;

  @Column({ type: 'enum', enum: OfferStatus })
  status: OfferStatus;
}
