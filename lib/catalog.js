export const products = {
  'celestial-ring': { ref: 'REF. AR-1778', name: 'Celestial Armillary Ring', nameCn: '天球浑仪戒指', image: 'imgs/古法戒指.png', price: null, currency: 'USD', sellable: false, stockStatus: 'Archive consultation', leadTime: 'Private appointment', fulfillment: 'Museum-grade handling' },
  'compass-ring': { ref: 'REF. CR-2024', name: "Navigator's Signet", nameCn: '航海家印戒', image: 'imgs/定制戒指.png', price: null, currency: 'USD', sellable: false, stockStatus: 'Bespoke', leadTime: '6-8 weeks', fulfillment: 'Made to order' },
  'stellar-pendant': { ref: 'REF. SP-1919', name: 'Aurora Hexagon', nameCn: '极光六芒吊坠', image: 'imgs/星芒项链.png', price: 6800, currency: 'USD', sellable: true, stockStatus: 'Limited availability', leadTime: '10-14 days', fulfillment: 'Insured express' },
  'astrolabe-bracelet': { ref: 'REF. AB-1762', name: 'Horological Cuff', nameCn: '星象时计腕饰', image: 'imgs/古法手环.png', price: null, currency: 'USD', sellable: false, stockStatus: 'Archive consultation', leadTime: 'Private appointment', fulfillment: 'White-glove logistics' },
  'celestial-brooch': { ref: 'REF. CB-1764', name: 'Celestial Globe Brooch', nameCn: '天球仪胸针', image: 'imgs/胸针.png..webp', price: null, currency: 'USD', sellable: false, stockStatus: 'Unique piece', leadTime: 'Private appointment', fulfillment: 'White-glove logistics' },
  'orrery-necklace': { ref: 'REF. ON-1768', name: 'Orrery Grand Collier', nameCn: '浑天仪项链', image: 'imgs/中世纪复古项链.png.webp', price: null, currency: 'USD', sellable: false, stockStatus: 'Unique piece', leadTime: 'Private appointment', fulfillment: 'White-glove logistics' },
  'sextant-pendant': { ref: 'REF. CP-2026', name: 'Sextant Coordinates', nameCn: '北斗坐标吊坠', image: 'imgs/ASTRAEUS星座六分仪砖石吊坠.png', price: 12800, currency: 'USD', sellable: true, stockStatus: 'Limited 36', leadTime: '14-21 days', fulfillment: 'Insured express' },
  'cipher-ring-1': { ref: 'REF. CR-2026-A', name: 'Binary Inscription', nameCn: '二进制铭刻', image: 'imgs/ASTRAEUS现代简约戒指2.png', price: 4200, currency: 'USD', sellable: true, stockStatus: 'Made to order', leadTime: '4-6 weeks', fulfillment: 'Insured express' },
  'cipher-ring-2': { ref: 'REF. CR-2026-B', name: 'Geometric Cipher', nameCn: '几何密码', image: 'imgs/ASTRAEUS现代简约戒指3.png', price: 4800, currency: 'USD', sellable: true, stockStatus: 'Limited 72', leadTime: '3-5 weeks', fulfillment: 'Insured express' },
  'cipher-necklace': { ref: 'REF. CN-2026', name: 'Axis Code', nameCn: '轴线代码', image: 'imgs/ASTRAEUS现代简约项链4.png', price: 7600, currency: 'USD', sellable: true, stockStatus: 'Limited 48', leadTime: '3-4 weeks', fulfillment: 'Insured express' },
  'celestial-sphere': { ref: 'REF. SP-2026', name: 'Celestial Origin', nameCn: '天球原点', image: 'imgs/1773755290030.png', price: 16800, currency: 'USD', sellable: true, stockStatus: 'Limited 24', leadTime: '6-8 weeks', fulfillment: 'Insured express' },
  'balance-pendant': { ref: 'REF. BP-2026', name: 'Geometric Equilibrium', nameCn: '几何平衡', image: 'imgs/ASTRAEUS现代简约项链3.png', price: 5200, currency: 'USD', sellable: true, stockStatus: 'Made to order', leadTime: '4-6 weeks', fulfillment: 'Insured express' },
  'architectural-cuff': { ref: 'REF. AC-2026', name: 'Architectural Cuff', nameCn: '建筑腕饰', image: 'imgs/雕塑感手镯2.png', price: 19800, currency: 'USD', sellable: true, stockStatus: 'Limited 12', leadTime: '8-10 weeks', fulfillment: 'White-glove logistics' },
  'anchor-ring': { ref: 'REF. AR-2026', name: 'Absolute Anchor', nameCn: '绝对锚点戒指', image: 'imgs/绝对锚点戒指.png', price: null, currency: 'USD', sellable: false, stockStatus: 'Stone quote required', leadTime: 'Private quotation', fulfillment: 'White-glove logistics' },
  'bezel-ring': { ref: 'REF. BR-2026', name: 'Orbital Bezel', nameCn: '轨道包镶戒指', image: 'imgs/包镶戒指2.png', price: 11800, currency: 'USD', sellable: true, stockStatus: 'Limited 36', leadTime: '5-7 weeks', fulfillment: 'Insured express' },
  'bezel-stud': { ref: 'REF. BE-2026', name: 'Orbital Stud', nameCn: '轨道包镶耳钉', image: 'imgs/包镶耳钉1.png', price: 3600, currency: 'USD', sellable: true, stockStatus: 'Made to order', leadTime: '3-4 weeks', fulfillment: 'Insured express' },
  'inscription-ring': { ref: 'REF. IR-1919', name: 'Inner Inscription', nameCn: '内壁铭刻戒指', image: 'imgs/内壁铭刻戒指.png', price: null, currency: 'USD', sellable: false, stockStatus: 'Diamond quote required', leadTime: 'Private quotation', fulfillment: 'White-glove logistics' }
};

export function getSellableLineItems(items = []) {
  return items.map((item) => {
    const product = products[item.id];
    const quantity = Math.max(1, Number(item.quantity || 1));
    if (!product || !product.sellable || !product.price) return null;

    return {
      id: item.id,
      ref: product.ref,
      name: product.name,
      nameCn: product.nameCn,
      image: product.image,
      currency: product.currency || 'USD',
      unitAmount: Math.round(product.price * 100),
      quantity,
      leadTime: product.leadTime,
      fulfillment: product.fulfillment
    };
  }).filter(Boolean);
}

export function getOrderTotals(lineItems) {
  const subtotalCents = lineItems.reduce((sum, item) => sum + item.unitAmount * item.quantity, 0);
  return {
    currency: lineItems[0]?.currency || 'USD',
    subtotalCents,
    totalCents: subtotalCents
  };
}
