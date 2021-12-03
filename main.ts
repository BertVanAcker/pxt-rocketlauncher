input.onButtonPressed(Button.A, function () {
	
})
namespace rocketlauncher {
    /**
       * State of the rocket launcher
       */
    export enum RocketLaunchState {
        //% block="Disarmed"
        Disarmed,
        //% block="Armed"
        Armed,
        //% block="Error"
        Error
    }

    /**
         * Select a traffic light state
         * @param rocketState
         */
    //% blockId="set_rocket_state" block="Setting the rocket launcher state to %RocketLaunchState|"
    //% weight=80 blockGap=8
    export function RocketState(rocketState: RocketLaunchState): void {

        if (rocketState == RocketLaunchState.Armed) {
            //write pin 0 to HIGH 
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
        else if (rocketState == RocketLaunchState.Disarmed) {
            //write pin 0 to LOW
            pins.digitalWritePin(DigitalPin.P0, 0)
        }

    }
}
