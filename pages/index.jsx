import { useState, useEffect } from "react"
import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    title: "A first Meetup",
    image:
      "https://www.panorama.lt/assets/Uploads/FoodPlaceGallery/Gan-bei-v2__CompressedW10.jpg",
    id: "m1",
    address: "some address 10, 12345 Some city",
    description: "our first meetup",
  },
  {
    title: "A second Meetup",
    image:
      "https://www.panorama.lt/assets/Uploads/FoodPlaceGallery/Gan-bei-v2__CompressedW10.jpg",
    id: "m1",
    address: "some address 10, 12345 Some city",
    description: "our second meetup",
  },
]

const Homepage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    //
    setLoadedMeetups(DUMMY_MEETUPS)
  }, [])

  return <MeetupList meetups={loadedMeetups} />
}

export default Homepage
