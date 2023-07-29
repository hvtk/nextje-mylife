import './homepage.css'
import { Selection } from '../component/selections/selection'
import { SelectionName } from '../component/selections/selectionName'
import { SidebarBase } from '../component/sidebar/base'
import selectImageWhereILive from 'public/images/selections/where i live.jpg'
import selectImageFamily from 'public/images/selections/family.jpg'


export default function Page() {
  return (
    <>
      <body className="homepageLayout">
        <div id="sidebar">
          <SidebarBase/>
        </div>
        <main>
          <div id="dialog"></div>
          <article>
            <div id="figureFamily">
              <Selection 
                src={selectImageFamily}
                alt="image respresending my family and friends"
              />
            </div>
            <div id="figcaptionFamily">
              <SelectionName>
                Family and Friends
              </SelectionName>
            </div>
          </article>  
          <article>
            <div id="figureHome">
              <Selection
                src={selectImageWhereILive} 
                alt="images represending my place to live"
              /> 
            </div>
            <div id="figcaptionHome">
              <SelectionName>
                Where I live
              </SelectionName>
            </div>
          </article>
          <article>
            <div id="figureEatAndDrink"></div>
            <div id="figcaptionEatAndDrink"></div>
          </article>
          <article>
            <div id="figureMySchedule"></div>
            <div id="figcaptionMySchedule"></div>
          </article>
          <article>
            <div id="figurePersonalSituation"></div>
            <div id="figcaptionPersonalSituation"></div>
          </article>
          <article>
            <div id="figureFinance"></div>
            <div id="figcaptionFinance"></div>
          </article>
          <article>
            <div id="figureInsurance"></div>
            <div id="figcaptionInsurance"></div>
          </article>
          <article>
            <div id="figureSleep"></div>
            <div id="figcaptionSleep"></div>
          </article>
          <article>
            <div id="figureSubscribtions"></div>
            <div id="figcaptionSubscribitions"></div>
          </article>
          <article>
            <div id="figureInstalledApps"></div>
            <div id="figcaptionInstalledApps"></div>
          </article>
          <article>
            <div id="figureUsedWebsites"></div>
            <div id="figcaptionUsedWebsites"></div>
          </article>
          <article>
            <div id="figureReminders"></div>
            <div id="figcaptionReminders"></div>
          </article>
          <article>
            <div id="figureRightsAndObligations"></div>
            <div id="figcaptionRightsAndObligations"></div>
          </article>
          <article>
            <div id="figureDailyRoutine"></div>
            <div id="figcaptionDailyRoutine"></div>
          </article>
        </main>
      </body>
    </>
  )
}