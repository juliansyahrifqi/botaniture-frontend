import ContactItem from "../ContactItem"

const contactList = [
  { link: 'https://www.instagram.com', value: '@botaniture', image: '/image.png'},
  { link: 'https://www.twitter.com', value: '@botaniture', image: '/image.png'},
  { link: 'www.email.com', value: '@botaniture@gmail.com', image: '/image.png'},
  { link: 'www.whatsapp.com', value: '(+62) 8123456789', image: '/image.png'}
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
