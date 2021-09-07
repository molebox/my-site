import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        src: url('/fonts/PomfretV2-Regular.woff2') format("woff2"),
            url('/fonts/PomfretV2-Regular.woff') format("woff");
        font-family: 'Pomfret Web';
        font-style: normal;
        font-weight: 400;
      }
      `}
  />
)

export default Fonts