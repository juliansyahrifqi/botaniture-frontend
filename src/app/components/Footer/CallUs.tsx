import ContactItem from "../ContactItem"

const contactList = [
  { link: 'https://www.instagram.com', value: '@botaniture', image: '/whatsapp.png'},
  { link: 'https://www.twitter.com', value: '@botaniture', image: '/whatsapp.png'},
  { link: 'www.email.com', value: '@botaniture@gmail.com', image: '/whatsapp.png'},
  { link: 'www.whatsapp.com', value: '(+62) 8123456789', image: '/whatsapp.png'}
]

export default function CallUs() {
  return (
    <>
      {contactList.map((list, index) => (
        <ContactItem image={list.image} link={list.link} value={list.value} key={index}/>
      ))}
    </>
  )
}
