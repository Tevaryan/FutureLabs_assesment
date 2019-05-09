import React, { Component } from 'react';
import '../App.css';
import NavbarComponent from '../components/Navbar.js'
import MentorCard from './MentorCard.js'


class BrowseMentor extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          mentors: [
            {
              name: "Tony Stark",
              job_title: "CEO of Stark Industries",
              photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/photos/tony.jpg",
              availability: ["0/14:00", "0/15:00", "0/16:00"],
              expertise: ["Robotics", "Artificial intelligence", "Weapons manufacturing"],
              about_me: "My name is Tony Stark and I am Iron Man. Also, billionaire, genius, playboy and philanthropist.",
              jobs: [
                {
                  title: "CEO of Stark Industries",
                  company: "Stark Industries",
                  description: "I am the company. Also, I'm technically not just the CEO. I design most of the stuff in this company. So would that make me the CTO as well? Who knows?",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/stark-industries-iron-man-tony-3d-domed-epoxy-resin-sticker-decal-emblem-2800x1600.jpg"
                },
                {
                  title: "Avenger",
                  company: "The Avengers",
                  description: "I'm not the boss. Actually Steve is the boss. I just pay for everything and design everything and make everyone look cooler.",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/c8aae7ccf04ffd6914be5653bcb28fea.jpg"
                }
              ],
              education: [
                {
                  university: "MIT",
                  course: "Mechanical Engineering",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/MIT_Seal.svg.png"
                }
              ]
            },
          
            {
              name: "Steve Rogers",
              job_title: "The First Avenger",
              photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/photos/steve.jpg",
              availability: ["1/17:00", "2/17:00", "3/17:00"],
              expertise: ["Leadership", "War strategy", "Hand to hand combat"],
              about_me: "Hi, I'm Steve Rogers and I'm from Brooklyn.",
              jobs: [
                {
                  title: "Avenger",
                  company: "The Avengers",
                  description: "I lead the team in skirmishes and missions. We usually save the world.",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/c8aae7ccf04ffd6914be5653bcb28fea.jpg"
                },
                {
                  title: "Captain",
                  company: "US Army",
                  description: "I'm Captain America.",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/Military_service_mark_of_the_United_States_Army.png"
                }
              ],
              education: [
                {
                  university: "George Washington High School",
                  course: "High School",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/v-D_TuGA_400x400.jpg"
                }
              ]
            },
          
            {
              name: "Thor Odinson",
              job_title: "God of Thunder",
              photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/photos/thor.jpg",
              availability: ["3/12:00"],
              expertise: ["Fighting", "Drinking", "Exploring"],
              about_me: "I'm the son of Odin. He's my dad. Ruler of Asgard and all that. Well that makes me the future ruler of Asgard, and also the son of god.",
              jobs: [
                {
                  title: "Avenger",
                  company: "The Avengers",
                  description: "I'm the strongest Avenger.",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/c8aae7ccf04ffd6914be5653bcb28fea.jpg"
                },
                {
                  title: "Protector of the 9 realms",
                  company: "Asgard",
                  description: "I protect the mortal realm. I'm their god you see. They worship me and I protect them from danger.",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/tree-papecut.jpg"
                }
              ],
              education: [
                {
                  university: "Asgard",
                  course: "Knowledge of the universe",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/tree-papecut.jpg"
                }
              ]
            },
          
            {
              name: "Bruce Banner",
              job_title: "Expert Physicist in Gamma Radiation",
              photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/photos/bruce.jpg",
              availability: ["6/00:00", "6/01:00", "6/02:00", "6/03:00", "6/04:00", "6/05:00", "6/06:00"],
              expertise: ["Physics", "Chemistry", "Biology", "Engineering"],
              about_me: "I had a little accident in an experiment. Now I have to be careful not to get angry. But don't let me scare you. I'm cool, you know.",
              jobs: [
                {
                  title: "Avenger",
                  company: "The Avengers",
                  description: "I was forced into joining. I don't like violence.",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/c8aae7ccf04ffd6914be5653bcb28fea.jpg"
                }
              ],
              education: [
                {
                  university: "Harvard University",
                  course: "Physics",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/270px-Harvard_shield_wreath.svg.png"
                }
              ]
            },
          
            {
              name: "Natasha Romanoff",
              job_title: "Russian Spy",
              photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/photos/natasha.jpg",
              availability: ["5/22:00"],
              expertise: ["Espionage"],
              about_me: "You gotta ask me to know me better.",
              jobs: [
                {
                  title: "Avenger",
                  company: "The Avengers",
                  description: "You don't need to know any details about what I do.",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/c8aae7ccf04ffd6914be5653bcb28fea.jpg"
                }
              ],
              education: []
            },
          
            {
              name: "Clint Barton",
              job_title: "SHIELD Agent & Marksman",
              photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/photos/clint.jpg",
              availability: ["5/23:00"],
              expertise: ["Perfect aim", "Disciplined", "Resourceful"],
              about_me: "I never seem to miss. It's a curse. Golf's no fun.",
              jobs: [
                {
                  title: "Avenger",
                  company: "The Avengers",
                  description: "I don't have any superpowers. But I'm good with a bow.",
                  photo: "https://raw.githubusercontent.com/Joera47/booking-scheduler-test/master/companies_and_universities/c8aae7ccf04ffd6914be5653bcb28fea.jpg"
                }
              ],
              education: []
            }
          ]
          
        };
      }
  render() 
  {
    return (
        <>
            <NavbarComponent/>
            <div style={{backgroundColor: '#aeb6be', height:'100vh', overflow:'auto'}}>
                {
                    this.state.mentors.map(mentor =>
                        <MentorCard
                            name = {mentor.name}
                            jobtitle = {mentor.job_title}
                            availability ={mentor.availability}
                            expertise={mentor.expertise}
                            photo={mentor.photo}
                        />
                    )
                }
            </div>
        </>
    )
  }
}

export default BrowseMentor;
