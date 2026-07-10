import assert from 'node:assert/strict';
import test from 'node:test';
import { getOrderTotals, getSellableLineItems } from '../lib/catalog.js';

test('uses server-side product data and ignores unavailable products', () => {
  const items = getSellableLineItems([
    { id: 'sextant-pendant', quantity: 1, price: 1 },
    { id: 'celestial-ring', quantity: 1 },
    { id: 'missing-product', quantity: 1 }
  ]);

  assert.equal(items.length, 1);
  assert.equal(items[0].unitAmount, 1_280_000);
});

test('aggregates duplicate products and caps quantity at ten', () => {
  const items = getSellableLineItems([
    { id: 'bezel-stud', quantity: 8 },
    { id: 'bezel-stud', quantity: 8 }
  ]);

  assert.equal(items[0].quantity, 10);
  assert.equal(getOrderTotals(items).totalCents, 3_600_000);
});

test('normalizes invalid quantities to one', () => {
  const items = getSellableLineItems([
    { id: 'stellar-pendant', quantity: -2 },
    { id: 'cipher-ring-1', quantity: 1.5 }
  ]);

  assert.deepEqual(items.map((item) => item.quantity), [1, 1]);
});
