// lib/constants.ts

export interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Props[] = [
  {
    title: "Google Cloud Next 2025",
    image: "/images/event1.png",
    slug: "google_cloud_next_2025",
    location: "San Francisco, CA, USA",
    date: "April 8–10, 2025",
    time: "9:00 AM PST",
  },
  {
    title: "React Summit 2025",
    image: "/images/event2.png",
    slug: "react_summit_2025",
    location: "Amsterdam, Netherlands",
    date: "June 12–13, 2025",
    time: "10:00 AM CET",
  },
  {
    title: "AWS reInvent 2025",
    image: "/images/event3.png",
    slug: "aws_reinvent_2025",
    location: "Las Vegas, NV, USA",
    date: "December 1–5, 2025",
    time: "9:00 AM PST",
  },
  {
    title: "JSConf Asia 2025",
    image: "/images/event4.png",
    slug: "jsconf_asia_2025",
    location: "Singapore",
    date: "September 5–7, 2025",
    time: "9:30 AM SGT",
  },
  {
    title: "Hack the Future 2025",
    image: "/images/event5.png",
    slug: "hack_the_future_2025",
    location: "Bengaluru, India",
    date: "July 20–21, 2025",
    time: "10:00 AM IST",
  },
  {
    title: "Open Source Summit Europe 2025",
    image: "/images/event6.png",
    slug: "open_source_summit_europe_2025",
    location: "Berlin, Germany",
    date: "October 14–16, 2025",
    time: "9:00 AM CET",
  },
];
