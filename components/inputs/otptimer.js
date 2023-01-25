import React from 'react'
import RnOtpTimer from 'rn-otp-timer';

export const Otptimer = () => {
  return (
    <RnOtpTimer
        minutes={0}
        seconds={40}
        resendButtonStyle={styles.button}
        resendButtonTextStyle={styles.buttonText}
        resendButtonAction={() => {
            console.log('otp resent!');
        }}
    />
  )
}
