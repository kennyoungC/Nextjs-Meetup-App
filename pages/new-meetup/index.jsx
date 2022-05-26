import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const index = () => {
  const newMeetupHandler = (newMeetup) => {
    console.log(newMeetup)
  }

  return <NewMeetupForm onAddMeetup={newMeetupHandler} />
}

export default index
