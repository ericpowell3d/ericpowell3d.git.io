////////// DEPENDENCIES //////////
import React from 'react';
import { Global } from '../utils/Global';

////////// COMPONENT //////////
export default function ChangeLog(props) {
  const { checkPage } = React.useContext(Global);
  React.useEffect(() => { checkPage(); });

  const versions = [
    // {
    //   num: `v0.3.32`,
    //   date: `06/24/2020`,
    //   change: `New Portfolio Reels`,
    //   detail: `Added 2 new video reels! One to show of my 3D skills and another to show off my motion graphics skills. Working on a carousel for them in the future.`,
    // },
    {
      num: `v0.4.0`,
      date: `07/18/2020`,
      change: `Project Restructure`,
      detail: `Using new ways of structuring the project. Working with SEO. Made some minor UI tweaks & optimizations.`,
    },
    {
      num: `v0.3.25`,
      date: `02/16/2020`,
      change: `Working Contact Form`,
      detail: `Contact form is fully functional. If you would like to shoot me an email, please do so!`,
    },
    {
      num: `v0.3.20`,
      date: `02/15/2020`,
      change: `New Contact Form`,
      detail: `First draft of Contact page. Has verification and ReCAPTCHA, but doesn't quite function just yet. Update for that coming soon.`,
    },
    {
      num: `v0.3.11`,
      date: `01/10/2020`,
      change: `New Changelogs`,
      detail: `Created "Changelog" page with these messages visible to the public. Some folks were asking to see my progress.`,
    },
    {
      num: `v0.3.9`,
      date: `01/09/2020`,
      change: `Quality of life changes`,
      detail: `Some things, like the navbar and footer have been reskinned. Lots of quality of life changes added.`,
    },
    {
      num: `v0.3.5`,
      date: `01/08/2020`,
      change: `404 page`,
      detail: `Added _redirects to catch anyone outside of the main site. Created 404 page to accomodate.`,
    },
    {
      num: `v0.3.3`,
      date: `01/06/2020`,
      change: `Netlify hosting`,
      detail: `Domain is now fully hosted through Netlify.`,
    },
    {
      num: `v0.3.0`,
      date: `01/05/2020`,
      change: `React release`,
      detail: `Completely overhauled site using create-react-app. There should no longer be a need to remake the site.`,
    },
    {
      num: `v0.2.23`,
      date: `10/28/2019`,
      change: `Added "Zone Unknown React" to portfolio`,
      detail: `Last update for handlebars site with a bunch of fixes & project updates. React version coming soon!`,
    },
    {
      num: `v0.2.18`,
      date: `09/12/2019`,
      change: `Navigation fixes & cleanup`,
      detail: `Added back & forth functionality through manual history storage (this will change when I figure out a better way to do it).`,
    },
    {
      num: `v0.2.15`,
      date: `07/28/2019`,
      change: `Added resume link`,
      detail: `Created a resume link on my logo to open up in-browser.`,
    },
    {
      num: `v0.2.14`,
      date: `07/28/2019`,
      change: `Connected domain "ericpowell3d.com"`,
      detail: `Finally transferred my domain from my old Wix site.`,
    },
    {
      num: `v0.2.12`,
      date: `07/18/2019`,
      change: `Completed Work page with responsiveness`,
      detail: `Replaced old "Portfolio" page with "Work" page and made it responsive.`,
    },
    {
      num: `v0.2.11`,
      date: `07/18/2019`,
      change: `Completed Profile page responsiveness`,
      detail: `Made the Profile page responsive on every type of screen with media queries.`,
    },
    {
      num: `v0.2.6`,
      date: `07/17/2019`,
      change: `Completed Profile page`,
      detail: `Combined old "Home" & "About" pages with new "Profile" page.`,
    },
    {
      num: `v0.2.0`,
      date: `07/16/2019`,
      change: `Completely restarted site`,
      detail: `Started a new site with a fresh coat of custom CSS. No more CSS frameworks.`,
    },
    {
      num: `v0.1.4`,
      date: `06/07/2019`,
      change: `Added Contact page`,
      detail: `Added new "Contact" page with a form to send me an email.`,
    },
    {
      num: `v0.1.3`,
      date: `06/05/2019`,
      change: `Integrated Bootstrap CSS`,
      detail: `Re-created site using Bootstrap layouts.`,
    },
    {
      num: `v0.1.0`,
      date: `05/14/2019`,
      change: `Initial commit`,
      detail: `Created basic template with an "About" & "Portfolio" page.`,
    },
  ]

  return (<>
    <main id="changelog">
      <section id="section-changelog">
        <div className="changelog-main">
          <div className="changelog-box">
            {
              versions.map((ver, i) =>
                <div key={ver.num} className="changelog-row">
                  <h3 className="changelog-row-version">{ver.num}</h3>
                  <h4 className="changelog-row-head">{ver.change}</h4>
                  <h6 className="changelog-row-body">{ver.detail}</h6>
                  {i < versions.length - 1 ? <div className="changelog-line-break" /> : null}
                </div>
              )
            }
          </div>
        </div>
      </section>
    </main>
  </>)
}