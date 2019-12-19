import React from 'react';
import { StyledProjectOutline } from '../styled';
import { Footer } from '../components';
import {
  browseFull,
  eventPageFull,
  initialResearchFlow,
  motivationInsights,
  lofi1,
  personaVolunteer,
  personaNonprofit,
  userflow1,
  userflow3
} from '../assets/voluntier';

export const VoluntierOutline = () => {
  return (
    <div>
      <StyledProjectOutline>
        <div className='hero grid-row'>
          <figure>
            <img
              src={eventPageFull}
              alt='hero image showing off a mockup screen for the VolunTier event page'
            />
            <figcaption></figcaption>
          </figure>
          <figure>
            <img
              src={browseFull}
              alt='hero image showing off a mockup screen for the VolunTier event page'
            />
            <figcaption></figcaption>
          </figure>
        </div>
        <h2 className='header'>
          VolunTier works with local nonprofits to connect potential volunteers
          with causes they're passionate about.
        </h2>
        <div className='content'>
          <h3 id='01_'>01_ Introduction</h3>
          <h6>Background & Context</h6>
          <p>
            VolunTier was a 6-week project with a team of other students as part
            of Lambda School’s Labs program. I worked as a user experience (UX)
            engineer alongside another UX student, five fullstack web students,
            and a team lead.
          </p>
          <p>
            My specific roles on the UX side included:{' '}
            <mark>
              ideation, user research, user flow mapping, creation of high
              fidelity prototypes, and user testing.
            </mark>{' '}
            For engineering, I worked extensively on converting mockups into
            React components, system debugging, and maintaining a Firebase
            backend.
          </p>
          <p>
            Our problem statement and project solution came down directly from a
            stakeholder who we reported to weekly. The stakeholder previously
            worked in fraternity/sorority management for a large university, and
            encountered difficulty when students needed to fill volunteer hours.
          </p>
          <h4 id='01a_'>The Problem: Volunteers and Nonprofits</h4>
          <p>
            There exists an asymmetry of information between potential
            volunteers and nonprofits offering opportunities. While there are
            many who enjoy volunteering,{' '}
            <mark>
              it seems they are unable to quickly and easily find opportunities
              that meet their preferences.
            </mark>{' '}
            Additionally, nonprofits frequently struggle to fill their roster
            with enough helping hands.
          </p>
          <h3 id='02_'>02_ Research</h3>
          <p>
            Our first two weeks of the project was dedicated to user research.
            After understanding our problem statement and the outline of a
            solution, we immediately set out to learn about our two different
            types of users.
          </p>
          <h4 id='02a_'>Volunteer Research</h4>
          <p>
            We created a <a href='http://typeform.com'>Typeform</a> survey aimed
            at people with some experience in volunteer work. Using a
            combination of multiple choice, short answer, and longform
            questions, we hoped to learn more about volunteers and their
            motivations.
          </p>
          <p>
            After a week of sharing the survey in our network, we were able to
            collect 63 responses from a number of people, a majority of which
            (~70%) aged 24-33.
          </p>
          <figure className='full-width'>
            <img
              src={initialResearchFlow}
              alt='flowchart showing different stages of user research'
            />
          </figure>
          <p>
            Of these respondents, 3 agreed to a remote interview. These were 30
            minute discussions of a mixture of prepared open-ended and
            contextual followup questions. We learned a number of key insights
            that guided the direction of our project:
          </p>
          <div className='grid-row'>
            <figure>
              <img
                src={motivationInsights}
                alt="excerpt from survey results showing respondents' motivations for volunteering"
              />
            </figure>
            <div>
              <h6>Moral Perspective Drives Activism</h6>
              <p>
                Overwhelmingly it would seem. The reasons that drive people to
                volunteer are usually morality based, and that volunteering
                one’s time to an organization in need is universally considered
                good.
              </p>
              <p>
                Additionally, those interviewed all shared stories of
                volunteering as part of a group. From this, we reasoned that
                feeling like part of a community or movement is a major
                motivator for participating in volunteer work.
              </p>
            </div>
          </div>
          <h6>Informative Requests get Results</h6>
          <p>
            We discovered that people want to know what they’re getting into
            when they sign up to volunteer. When there isn’t enough information
            about duties needed, personal requirements, or time expected,
            respondents said they often don’t sign up at all.
          </p>
          <h4 id='02b_'>Nonprofit Research</h4>
          <p>
            When it came to getting the perspective of nonprofits, the team
            decided it’d be best to skip the surveys. We found 4 people with
            previous experience working in a nonprofit managing volunteers, and
            invited them for a 30 minute interview to discover their pain
            points.
          </p>
          <div className='pull-quote'>
            I wish there was some kind of online calendar management system for
            keeping track of events and volunteers.
          </div>
          <p>
            Ultimately, these interviews were incredibly validating to the
            stakeholder’s vision. Some of the biggest insights:
          </p>
          <h6>Volunteer Accountability</h6>
          <p>
            One of the biggest complaints about signed up volunteers were the
            prevalence of noshows. Without a way to keep signups accountable,
            not having enough hands for events happened too often.
          </p>
          <p>
            Additionally, there was no way to confirm that any given volunteer
            was a trustworthy asset. This especially concerned organizations
            that dealt with children or the elderly.{' '}
          </p>
          <h6>Administrative Burden</h6>
          <p>
            Many organizations required an application or interview before
            helping. Keeping track of applications and scheduling interviews
            would quickly become a paperwork nightmare.
          </p>
          <p>
            Those interviewed often managed events that happen on a regular
            schedule, as opposed to one-time occasions. Frequently, recurring
            events are harder to gather volunteers for. This challenged our
            original assumptions, and we eventually integrated recurring events
            as a core of our product.
          </p>
          <h4 id='02c_'>User Personas</h4>
          <p>
            Our research cleared the fog on who our target audience needed to
            be. We created some user personas to help our team understand who to
            design for.
          </p>
          <div className='grid-row'>
            <figure>
              <img
                src={personaNonprofit}
                alt='a user persona of an imagined nonprofit user'
              />
              <figcaption></figcaption>
            </figure>
            <figure>
              <img
                src={personaVolunteer}
                alt='a user persona of an imagined volunteer user'
              />
              <figcaption></figcaption>
            </figure>
          </div>
          <p>
            At this point, a product solution began to form. An easy to use,
            transparent platform for connecting potential volunteers with local
            nonprofits. By creating a space for both sides of the conversation
            to meet, we saw an opportunity to bridge the gap.
          </p>
          <p>
            This means we’ll need to cater to two types of users and their
            unique needs.
          </p>
          <div className='grid-row'>
            <div>
              <h6>Nonprofit User Key Features</h6>
              <ul>
                <li>Create and post public events</li>
                <li>Manage different tasks for each event</li>
                <li>Communicate with signed up volunteers</li>
                <li>Properly advertise requirements and needs</li>
              </ul>
            </div>
            <div>
              <h6>Volunteer User Key Features</h6>
              <ul>
                <li>Search locally for volunteer opportunities</li>
                <li>Filter opportunities by category or requirements</li>
                <li>Join friends and sign up as a group</li>
                <li>Log hours volunteered for later verification</li>
              </ul>
            </div>
          </div>
          <h3>03_ Pre-Production</h3>
          <p>
            With our research in hand, we started on our ideation phases and a
            first pass at some user flows and low-fidelity mockups.
          </p>
          <div className='grid-row'>
            <figure>
              <img src={userflow1} alt='' />
              <figcaption></figcaption>
            </figure>
            <figure>
              <img src={userflow3} alt='' />
              <figcaption></figcaption>
            </figure>
          </div>
          <div className='grid-row'>
            <figure>
              <img src={lofi1} alt='' />
              <figcaption></figcaption>
            </figure>
          </div>
          <h3>04_ Coming Soon ...</h3>
        </div>{' '}
        {/* end .content */}
      </StyledProjectOutline>
      <Footer />
    </div>
  );
};
