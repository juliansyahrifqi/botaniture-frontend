import ContactItem from "../ContactItem"

export default function CallUs({ contactList }: any) {
  return (
    <>
      {contactList.data.map((list: any, index: number) => (
        <ContactItem image={list.contact_image} link={list.contact_link} value={list.contact_account} key={index}/>
      ))}
    </>
  )
}
