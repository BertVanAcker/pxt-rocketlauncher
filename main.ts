input.onButtonPressed(Button.A, function () {
    rocket.initiateLaunch()
})
let rocket: rocketlauncher.rocket = null
enum RocketLaunchState {
    //% block="Disarmed"
    Disarmed,
    //% block="Armed"
    Armed,
    //% block="Error"
    Error
}
namespace rocketlauncher {
    


    export class rocket {
        launchpin: DigitalPin;
        countdown: number; // countdown in milliseconds
        name: String;
        mode: RocketLaunchState;

        /**
         * initiate the launch sequence.
         */
        //% blockId="initiate-launch" block="%Rocket| launch" blockGap=8
        //% rocket.defl=rocket
        //% weight=79
        //% parts="rocket"
        initiateLaunch() {
            if(this.mode==RocketLaunchState.Armed){
                //start countdown
                basic.pause(this.countdown);
                //write pin 1 to HIGH 
                pins.digitalWritePin(this.launchpin, 1)
                
                // cooldown and shutdown
                basic.pause(500);
                pins.digitalWritePin(this.launchpin, 0)
            }
            else{
                this.mode=RocketLaunchState.Error
            }
        }

        /**
         * Set the rocket state
         * @param state
         */
        //% rocket.defl=rocket
        //% blockId="set_rocket_state" block="Set rocket state to %state"
        //% weight=80 blockGap=8
        setRocketState(state: RocketLaunchState): void {

            if (state == RocketLaunchState.Armed) {
                //write pin 0 to HIGH 
                pins.digitalWritePin(DigitalPin.P0, 1)
            }
            else if (state == RocketLaunchState.Disarmed) {
                //write pin 0 to LOW
                pins.digitalWritePin(DigitalPin.P0, 0)
            }

        }

        /**
             * Rocket state
             */
        //% blockId=rocket_state block="is armed?"
        isArmed(): boolean{
            return(this.mode==RocketLaunchState.Armed)

        }


    }

/**
 * 
 * VISIBLE FUNCTIONS
 * 
 */

    /**
         * Create a new rocket 
         * @param launchpin the pin where the rocket launch mechanism is conneted to.
         * @param countdown
         * @param RocketLaunchState
         */
    //% blockId="rocket_create" block="Initialize rocket|on launchpin %launchpin|with launch delay %countdown|pre-arm state %RocketLaunchState"
    //% weight=90 blockGap=8
    //% parts="rocket"
    //% trackArgs=0,2
    //% blockSetVariable=rocket
    export function create(launchpin: DigitalPin,countdown:number, mode: RocketLaunchState): rocket {
        let r = new rocket();
        r.launchpin = launchpin
        r.countdown = countdown
        r.mode = mode
        return r;
    }



    
}
rocket = rocketlauncher.create(DigitalPin.P2, 1500, RocketLaunchState.Disarmed)
loops.everyInterval(500, function () {
    if (true) {
    	
    }
})
