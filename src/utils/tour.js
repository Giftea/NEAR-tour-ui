import { v4 as uuid4 } from 'uuid';
import { parseNearAmount } from 'near-api-js/lib/utils/format';

const GAS = 100000000000000;

export function createTour(tour) {
  tour.id = uuid4();
  tour.price = parseNearAmount(tour.price + '');
  return window.contract.setTour({ tour }, GAS, parseNearAmount(0.52 + ''));
}

export function getTours() {
  return window.contract.getTours();
}

export function getTour(id) {
  return window.contract.getTour(id);
}

export async function buyTour({ id, price }) {
  await window.contract.buyTour({ tourId: id }, GAS, price);
}

export async function updateTour(tour) {
  await window.contract.updateTour({ tour });
}

export async function deleteTour(id) {
  return window.contract.deleteTour(id);
}

export async function likeTour(id) {
  return window.contract.likeTour(id, GAS, parseNearAmount(0.0001 + ''));
}

export async function unLikeTour(id) {
  return window.contract.unLikeTour(id, GAS, parseNearAmount(0.0001 + ''));
}

export async function dislikeTour(id) {
  return window.contract.dislikeTour(id, GAS, parseNearAmount(0.0001 + ''));
}

export async function unDislikeTour(id) {
  return window.contract.unDislikeTour(id, GAS, parseNearAmount(0.0001 + ''));
}

export async function commentOnTour(comment) {
  comment.id = uuid4();
  return window.contract.commentOnTour({ comment }, GAS, parseNearAmount(0.0001 + ''));
}

export async function rateTour(rate) {
  rate.id = uuid4();
  await window.contract.rateTour({ rate }, GAS, parseNearAmount(0.0001 + ''));
}
