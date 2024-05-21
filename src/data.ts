import { getItemData } from './dataLoader';

interface Item {
  auctionHouseId: number;
  itemId: number;
  petSpeciesId: number | null;
  minBuyout: number;
  quantity: number;
  marketValue: number;
  historical: number;
  numAuctions: number;
}

export const items: Item[] = getItemData();
