export interface iPrice {
  [key: string]: number;
}

export interface iCards {
  title: string;
  desc: string;
  features: { name: string; white: boolean }[];
  prices: {
    [key: string]: iPrice;
    month: iPrice;
  };
}

export const cards: iCards[] = [
  {
    title: 'Basic Survival',
    desc: 'Basic',
    features: [
      {
        name: 'Email adresses',
        white: true,
      },
      {
        name: 'Phone numbers',
        white: true,
      },
      {
        name: 'Unlimited Lists',
        white: true,
      },
    ],
    prices: {
      day: {
        dollar: 1,
        euro: 0.7,
        rouble: 200,
      },
      month: {
        dollar: 30,
        euro: 25,
        rouble: 2400,
      },
    },
  },
  {
    title: 'Mission Professional',
    desc: 'Boost Tools',
    features: [
      {
        name: 'Email adresses',
        white: false,
      },
      {
        name: 'Phone numbers',
        white: false,
      },
      {
        name: 'Unlimited Lists',
        white: false,
      },
      {
        name: 'Export contacts',
        white: true,
      },
      {
        name: 'Prospecting',
        white: true,
      },
      {
        name: '50MB Per File Attachment',
        white: true,
      },
    ],
    prices: {
      day: {
        dollar: 9,
        euro: 6,
        rouble: 640,
      },
      month: {
        dollar: 276,
        euro: 200,
        rouble: 19200,
      },
    },
  },
  {
    title: 'Rocketship Premium',
    desc: 'Super Fuel',
    features: [
      {
        name: 'Email adresses',
        white: false,
      },
      {
        name: 'Phone numbers',
        white: false,
      },
      {
        name: 'Unlimited Lists',
        white: false,
      },
      {
        name: 'Export contacts',
        white: false,
      },
      {
        name: 'Prospecting',
        white: false,
      },
      {
        name: '50MB Per File Attachment',
        white: true,
      },
      {
        name: 'Basic analytics',
        white: true,
      },
    ],
    prices: {
      day: {
        dollar: 14,
        euro: 11.6,
        rouble: 1280,
      },
      month: {
        dollar: 420,
        euro: 350,
        rouble: 38400,
      },
    },
  },
];
