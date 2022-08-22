module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': "url('/public/img_login.png')",
      },
      colors: {
        darkblue: {
          0: "#F1F3FF",
          1: "#CFD4ED",
          2: "#AEB7E1",
          3: "#5E70C4",
          4: "#0D28A6",
          5: "#091B6F"
        },
        limegreen: {
          1: "#DEF1DF",
          2: "#C9E7CA",
          3: "#92D094",
          4: "#5CB85F",
          5: "#3D7B3F"
        },
        alert: {
          danger: "#FA2C5A",
          warning: "#F9CC00",
          success: "#73CA5C"
        },
        neutral: {
          1: "#FFFFFF",
          2: "#D0D0D0",
          3: "#8A8A8A",
          4: "#3C3C3C",
          5: "#151515"
        },
        platinum: {
          1: "#FBFBF2",
          2: "#E5E6E4",
          3: "#CFD2CD",
          4: "#A6A2A2",
          5: "#847577"
        }
      }
    },
  },
  plugins: [],
}
// /* Primary */
// --DARKBLUE05: #091B6F;
// --DARKBLUE04: #0D28A6;
// --DARKBLUE03: #5E70C4;
// --DARKBLUE02: #AEB7E1;
// --DARKBLUE01: #CFD4ED;
// --LIMEGREEN05: #3D7B3F;
// --LIMEGREEN04: #5CB85F;
// --LIMEGREEN03: #92D094;
// --LIMEGREEN02: #C9E7CA;
// --LIMEGREEN01: #DEF1DF;
// /* Alert */
// --ALERTDANGER: #FA2C5A;
// --ALERTWARNING: #F9CC00;
// --ALERTSUCCESS: #73CA5C;

// /* Neutral */
// --NEUTRAL05: #151515;
// --NEUTRAL04: #3C3C3C;
// --NEUTRAL03: #8A8A8A;
// --NEUTRAL02: #D0D0D0;
// --NEUTRAL01: #FFFFFF;