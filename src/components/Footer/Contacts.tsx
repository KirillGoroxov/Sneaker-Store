import Contact from '../../ui/Contact/Contact';

const Contacts = () => {
  return (
    <div className="md:ml-2 mt-2">
      <p className="font-bold"> Контакты:</p>
      <Contact img="phone" info="+7(800)-555-55-55" href="tel:+78005555555" />
      <Contact img="tg" info="@sneakerstore" href="https://t.me/sneakerstore" />
      <Contact
        img="inst"
        info="@sneakerstore"
        href="https://instagram/sneakerstore"
      />
    </div>
  );
};
export default Contacts;
