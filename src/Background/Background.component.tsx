import './Background.scss';
import sun from './outer-wilds-assets/sun.png';
import ashTwin from './outer-wilds-assets/ash-twin.png';
import attlerock from './outer-wilds-assets/attlerock.png';
import brittleHollow from './outer-wilds-assets/brittle-hollow.png';
import darkBramble from './outer-wilds-assets/dark-bramble.png';
import emberTwin from './outer-wilds-assets/ember-twin.png';
import giantsDeep from './outer-wilds-assets/giants-deep.png';
import hollowsLantern from './outer-wilds-assets/hollows-lantern.png';
import hourglassTwinSand from './outer-wilds-assets/hourglass-twin-sand.png';
import interloper from './outer-wilds-assets/interloper.png';
import orbitalProbeCannon from './outer-wilds-assets/orbital-probe-cannon.png';
import quantumMoon from './outer-wilds-assets/quantum-moon.png';
import solarStation from './outer-wilds-assets/solar-station.png';
import timberHearth from './outer-wilds-assets/timber-hearth.png';
import whiteHole from './outer-wilds-assets/white-hole.png';


export const Background = () => {
  return <div className='background'>
    <div className='orbit sun'>
      <img src={sun} />
      <img src={solarStation} />
    </div>
    <div className='orbit hourglass-twin'>
      <div className='hourglass-twin-planet'>
        <img src={ashTwin} />
        <img src={hourglassTwinSand} />
        <img src={emberTwin} />
      </div>
    </div>
    <div className='orbit timber-hearth'>
      <div className='timber-hearth-planet'>
        <img src={timberHearth} />
        <img src={attlerock} />
      </div>
    </div>
    <div className='orbit brittle-hollow'>
      <img src={brittleHollow} />
      <img src={hollowsLantern} />
    </div>
    <div className='orbit giants-deep'>
      <img src={giantsDeep} />
      <img src={orbitalProbeCannon} />
    </div>
    <div className='orbit dark-bramble'>
      <img src={darkBramble} />
    </div>









    <img src={interloper} />

    <img src={quantumMoon} />


    <img src={whiteHole} />
  </div>
}