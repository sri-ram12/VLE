export interface ContactPerson {
  name: string;
  phone: string;
  rawPhone: string;
  role: string;
  whatsappMessageTemplate: string;
}

export const STORE_INFO = {
  name: 'Vijaya Lakshmi Electricals',
  shortName: 'VL Electricals',
  tagline: 'Wholesale & Retail Showroom',
  categoryHeadline: 'Electricals • Plumbing • Sanitary • Hardware',
  subtitle: 'Quality products for homes, businesses, construction and everyday needs. Available through wholesale and retail.',
  gstin: '37AKWPV2528C1ZP',
  businessType: 'Wholesale & Retail',
  address: {
    doorNo: 'D.No. 7-41-2014',
    landmark: 'Opp. Mudu Ammavari Temple',
    street: 'Main Road, Sangivalasa',
    area: 'Thagarapuvalasa',
    district: 'Visakhapatnam District',
    state: 'Andhra Pradesh',
    pincode: '531162',
    fullFormatted: 'D.No. 7-41-2014, Opp. Mudu Ammavari Temple, Main Road, Sangivalasa, Thagarapuvalasa, Visakha Dist. - 531162'
  },
  contacts: [
    {
      name: 'Ch. Vikram',
      phone: '+91 9441160851',
      rawPhone: '9441160851',
      role: 'Sales & Wholesale Inquiries',
      whatsappMessageTemplate: 'Hello Vikram garu, I am inquiring from Vijaya Lakshmi Electricals website regarding product pricing.'
    },
    {
      name: 'Ch. Jagdish',
      phone: '+91 7296856740',
      rawPhone: '7296856740',
      role: 'Retail & Store Enquiries',
      whatsappMessageTemplate: 'Hello Jagdish garu, I saw your product catalog on the Vijaya Lakshmi Electricals website and would like details.'
    }
  ],
  primaryPhone: '9441160851',
  whatsappPhone: '9441160851',
  timings: {
    days: 'Monday – Sunday',
    hours: '8:00 AM – 9:00 PM',
    note: 'Open all 7 days for contractor and customer convenience'
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mudu+Ammavari+Temple+Main+Road+Sangivalasa+Thagarapuvalasa+531162',
  mapEmbedPlaceholder: 'https://maps.google.com/maps?q=Sangivalasa%2C+Thagarapuvalasa%2C+Andhra+Pradesh+531162&t=&z=15&ie=UTF8&iwloc=&output=embed',
  disclaimer: 'Prices shown are indicative demo prices and may vary based on market rates, raw material indices, and quantity. Contact the store for current pricing and bulk availability.'
};
