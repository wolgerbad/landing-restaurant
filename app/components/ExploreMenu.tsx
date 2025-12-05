'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ExploreMenu() {
  const [activeTab, setActiveTab] = useState('breakfast');
  const data = {
    breakfast: [
      {
        title: 'Garlic Butter Grilled Salmon',
        description:
          'Tender salmon fillet, flame-grilled and brushed with garlic butter, served with sautéed greens.',
        price: 95,
        id: 1,
      },
      {
        title: 'Tropical Coconut Chia Parfait',
        description:
          'Layers of chia pudding, fresh mango, toasted coconut flakes, and a drizzle of honey.',
        price: 58,
        id: 1,
      },
      {
        title: 'Summer Garden Pesto Pastâ',
        description:
          'Al dente pasta tossed with basil pesto, cherry tomatoes, and parmesan shavings.',
        price: 50,
        id: 1,
      },
      {
        title: 'Crispy Herb Chicken Supreme',
        description:
          'Golden roasted chicken with crispy skin, served over prosciutto salad and red wine glaze.',
        price: 48,
        id: 1,
      },
    ],
    brunch: [
      {
        title: 'Herb-Infused Grilled Prawns',
        description:
          'Tender salmon fillet, flame-grilled and brushed with garlic butter, served with sautéed greens.',
        price: 75,
        id: 2,
      },
      {
        title: 'Seared Tuna Bites',
        description:
          'Layers of chia pudding, fresh mango, toasted coconut flakes, and a drizzle of honey.',
        price: 55,
        id: 2,
      },
      {
        title: 'Truffle Mushroom Risotto Balls',
        description:
          'Tender salmon fillet, flame-grilled and brushed with garlic butter, served with sautéed greens.',
        price: 48,
        id: 2,
      },
      {
        title: 'Citrus-Glazed Salmon Fillet',
        description:
          'Al dente pasta tossed with basil pesto, cherry tomatoes, and parmesan shavings.',
        price: 35,
        id: 2,
      },
      {
        title: 'Tropical Coconut Chiâ Parfait',
        description:
          'Golden roasted chicken with crispy skin, served over prosciutto salad and red wine glaze.',
        price: 40,
        id: 2,
      },
    ],
    lunch: [
      {
        title: 'Coconut Chia Deluxe',
        description:
          'Tender salmon fillet, flame-grilled and brushed with garlic butter, served with sautéed greens.',
        price: 27,
        id: 3,
      },
      {
        title: 'Cashew Nut Salad',
        description:
          'Layers of chia pudding, fresh mango, toasted coconut flakes, and a drizzle of honey.',
        price: 38,
        id: 3,
      },
      {
        title: 'Pesto Summer Pasta',
        description:
          'Tender salmon fillet, flame-grilled and brushed with garlic butter, served with sautéed greens.',
        price: 45,
        id: 3,
      },
      {
        title: 'Summer Garden Pesto Pasta',
        description:
          'Al dente pasta tossed with basil pesto, cherry tomatoes, and parmesan shavings.',
        price: 20,
        id: 3,
      },
      {
        title: 'Coconut Chia Delight',
        description:
          'Golden roasted chicken with crispy skin, served over prosciutto salad and red wine glaze.',
        price: 18,
        id: 3,
      },
    ],
    dinner: [
      {
        title: 'Roasted Duck Breast',
        description:
          'Tender salmon fillet, flame-grilled and brushed with garlic butter, served with sautéed greens.',
        price: 55,
        id: 4,
      },
      {
        title: 'Seared Sea Bass',
        description:
          'Layers of chia pudding, fresh mango, toasted coconut flakes, and a drizzle of honey.',
        price: 68,
        id: 4,
      },
      {
        title: 'Herb-Crusted Lamb Chops',
        description:
          'Tender salmon fillet, flame-grilled and brushed with garlic butter, served with sautéed greens.',
        price: 25,
        id: 4,
      },
      {
        title: 'Summer Garden Pesto Pâsta',
        description:
          'Al dente pasta tossed with basil pesto, cherry tomatoes, and parmesan shavings.',
        price: 50,
        id: 4,
      },
      {
        title: 'Roasted Duck Breâst',
        description:
          'Golden roasted chicken with crispy skin, served over prosciutto salad and red wine glaze.',
        price: 30,
        id: 4,
      },
    ],
  };

  return (
    <div className="max-w-[1140px] py-[120px] mx-auto md:max-xl:px-16 xs:max-md:px-5">
      <div className="text-neutral1">
        <div className="text-center mb-[50px]">
          <p className="text-primary mb-[24px] font-jost text-[18px]">
            Explore Menu Option
          </p>
          <h1 className="font-gilda text-6xl">Best Catering Menus</h1>
        </div>
        <div className="grid grid-cols-4 w-fit mx-auto xs:max-md:grid-cols-2 xs:max-md:w-full gap-4 mb-[50px]">
          <button
            className={`font-jost font-semibold border px-[26px] py-[10px] ${
              activeTab === 'breakfast'
                ? 'text-primary border-primary'
                : ' border-neutral1'
            }`}
            onClick={() => setActiveTab('breakfast')}
          >
            Breakfast
          </button>
          <button
            onClick={() => setActiveTab('brunch')}
            className={`font-jost font-semibold border px-[26px] py-[10px] ${
              activeTab === 'brunch'
                ? 'text-primary border-primary'
                : ' border-neutral1'
            }`}
          >
            Brunch
          </button>
          <button
            onClick={() => setActiveTab('lunch')}
            className={`font-jost font-semibold border px-[26px] py-[10px] ${
              activeTab === 'lunch'
                ? 'text-primary border-primary'
                : ' border-neutral1'
            }`}
          >
            Lunch
          </button>
          <button
            onClick={() => setActiveTab('dinner')}
            className={`font-jost font-semibold border px-[26px] py-[10px] ${
              activeTab === 'dinner'
                ? 'text-primary border-primary'
                : ' border-neutral1'
            }`}
          >
            Dinner
          </button>
        </div>
        <div className="flex gap-20 mb-36 xs:max-xl:mb-12">
          <div className="xs:max-xl:hidden relative aspect-square col-start-1 col-span-1 w-[43%]">
            <Image
              src={`/exploremenu/${activeTab}.avif`}
              alt={`${activeTab} photograph`}
              width={500}
              height={754}
            />
          </div>
          <div className="flex flex-col xs:max-xl:w-full">
            {data[activeTab].map((item) => (
              <div
                key={item.title}
                className="flex xs:max-md:flex-col justify-between py-[30px] border-b border-neutral1/30"
              >
                <div className="max-w-[70%] xs:max-md:max-w-full xs:max-md:order-2 ">
                  <h2 className="text-2xl font-gilda pb-4">{item.title}</h2>
                  <p className="text-neutral1/70 font-jost text-md">
                    {item.description}
                  </p>
                </div>
                <span className="text-primary text-3xl font-gilda self-start xs:max-md:order-1 xs:max-md:mb-2">
                  ${item.price}.00
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 md:max-xl:grid-cols-2 xs:max-md:grid-cols-1 gap-8">
          <div className="bg-primary p-[12px] w-full">
            <div className=" border py-[22px] h-[164px] text-center">
              <h2 className="py-[12px] text-6xl font-gilda">2K</h2>
              <h4 className="text-2xl pb-[10px] font-gilda">Our Daily Order</h4>
            </div>
          </div>
          <div className="bg-primary p-[12px]">
            <div className=" border py-[22px] h-[164px] text-center">
              <h2 className="py-[12px] text-6xl font-gilda">15+</h2>
              <h4 className="text-2xl pb-[10px] font-gilda">Specialist Chef</h4>
            </div>
          </div>
          <div className="bg-primary p-[12px]">
            <div className=" border py-[22px] h-[164px] text-center">
              <h2 className="py-[12px] text-6xl font-gilda">150+</h2>
              <h4 className="text-2xl pb-[10px] font-gilda">Our Menu Dish</h4>
            </div>
          </div>
          <div className="bg-primary p-[12px]">
            <div className=" border py-[22px] h-[164px] text-center">
              <h2 className="py-[12px] text-6xl font-gilda">2K</h2>
              <h4 className="text-2xl pb-[10px] font-gilda">Won Awards</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
