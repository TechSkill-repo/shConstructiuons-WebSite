import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="head">
        <div className="left">
          <h2>Newsletter Signup</h2>
          <p className="clip">
            Get notified about updates and be the first to get early access to
            new episodes.
          </p>
        </div>
        <div className="right">
          <input type="text" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="wrapper">
        
      <div className="body">
        <div className="logo cursive"><svg  width="30px" height="100px" viewBox="0 0 365 40" xmlns="http://www.w3.org/2000/svg">
<path d="M24.6328 25.2266C24.2422 24.5078 23.6562 23.8594 22.875 23.2812C22.0938 22.7031 21.2109 22.2422 20.2266 21.8984C19.2578 21.5391 18.2422 21.2734 17.1797 21.1016C14.0234 20.6328 11.0781 19.6094 8.34375 18.0312C8.10938 17.9062 7.85938 17.6406 7.59375 17.2344C7.32812 16.8281 7.19531 16.4375 7.19531 16.0625C7.19531 14.6875 7.42188 13.3125 7.875 11.9375C8.34375 10.5469 8.9375 9.46094 9.65625 8.67969C10.8125 7.38281 12.8906 6.25 15.8906 5.28125C18.9062 4.3125 22.2969 3.82812 26.0625 3.82812C28.3125 3.82812 30.0469 4 31.2656 4.34375C32.5 4.6875 33.1172 5.21875 33.1172 5.9375C33.1172 7.10938 32.9531 8.01562 32.625 8.65625C32.3125 9.29688 31.9688 9.72656 31.5938 9.94531C31.2344 10.1484 30.5938 10.4297 29.6719 10.7891C28.6875 11.1328 27.8281 11.4922 27.0938 11.8672C26.375 12.2422 25.7578 12.6016 25.2422 12.9453C24.7266 13.2891 24.4062 13.4609 24.2812 13.4609C24.125 13.4609 24.0469 13.3984 24.0469 13.2734C24.0469 13.0078 24.3203 12.6094 24.8672 12.0781C25.4297 11.5312 26.1172 11.0547 26.9297 10.6484C27.7891 10.1953 28.2188 9.90625 28.2188 9.78125C28.2188 9.57812 27.7422 9.47656 26.7891 9.47656C23.8984 9.47656 21.2266 9.73438 18.7734 10.25C16.3203 10.7656 14.3828 11.4453 12.9609 12.2891C11.5547 13.1328 10.8516 13.9922 10.8516 14.8672C10.8516 15.4141 11.1406 15.8047 11.7188 16.0391C12.3125 16.2578 13.6094 16.6328 15.6094 17.1641C17.6094 17.6953 19.3984 18.3047 20.9766 18.9922C23.2422 19.9609 24.9219 20.9688 26.0156 22.0156C27.1094 23.0625 27.6562 24.2344 27.6562 25.5312C27.6562 26.4219 27.4375 27.3203 27 28.2266C26.5781 29.1172 25.9531 29.9375 25.125 30.6875C24.2969 31.4375 23.3438 32.0547 22.2656 32.5391C21.3438 32.9297 20.1797 33.2969 18.7734 33.6406C17.3828 33.9844 15.8672 34.25 14.2266 34.4375C12.6016 34.6406 11.0469 34.7422 9.5625 34.7422C6.82812 34.7422 4.625 34.4844 2.95312 33.9688C1.29688 33.4531 0.46875 32.6719 0.46875 31.625C0.46875 31.1562 0.75 30.4297 1.3125 29.4453C1.875 28.4453 2.53906 27.7734 3.30469 27.4297C3.97656 27.1641 4.625 27.0156 5.25 26.9844C5.875 26.9375 6.1875 27.0078 6.1875 27.1953C6.1875 27.2422 6.16406 27.2891 6.11719 27.3359C6.07031 27.3828 6.01562 27.4219 5.95312 27.4531C5.89062 27.4844 5.82812 27.5156 5.76562 27.5469C5.45312 27.6719 5.19531 27.7734 4.99219 27.8516C4.80469 27.9141 4.64844 27.9844 4.52344 28.0625C4.41406 28.125 4.35938 28.2188 4.35938 28.3438C4.35938 28.6719 5.97656 28.8359 9.21094 28.8359C12.0234 28.8359 14.3281 28.7344 16.125 28.5312C17.9219 28.3281 19.5078 27.9609 20.8828 27.4297C22.2578 26.8984 23.5078 26.1641 24.6328 25.2266ZM34.0781 32.0938C33.8125 32.0938 33.5859 31.9922 33.3984 31.7891C33.2109 31.5859 33.1172 31.3047 33.1172 30.9453C33.1172 30.6641 33.2812 30.1641 33.6094 29.4453C33.9531 28.7109 34.375 28.0625 34.875 27.5C35.3906 26.9219 35.9219 26.6328 36.4688 26.6328C37.1406 26.6328 37.4766 27.0312 37.4766 27.8281C37.4766 28.2656 37.2969 28.8359 36.9375 29.5391C36.5781 30.2266 36.1328 30.8281 35.6016 31.3438C35.0703 31.8438 34.5625 32.0938 34.0781 32.0938ZM51.7266 11.4219L46.6875 14.0703C45.9062 14.4609 45.3828 14.6562 45.1172 14.6562C44.6328 14.6562 44.2812 14.5078 44.0625 14.2109C43.8281 13.8984 43.7109 13.4219 43.7109 12.7812C43.7109 12.0469 43.8672 11.2031 44.1797 10.25C44.4922 9.28125 44.8516 8.57031 45.2578 8.11719C45.6797 7.64844 46.6641 7.00781 48.2109 6.19531C49.7734 5.36719 51.6484 4.53906 53.8359 3.71094C56.0234 2.88281 58.3047 2.19531 60.6797 1.64844C63.0547 1.10156 65.2266 0.828125 67.1953 0.828125C68.5703 0.828125 69.5859 1.04687 70.2422 1.48438C70.8984 1.92188 71.2266 3.07812 71.2266 4.95312C71.2266 5.96875 70.875 7.10156 70.1719 8.35156C69.4844 9.58594 68.6484 10.7891 67.6641 11.9609C66.6953 13.1328 64.8906 15.2109 62.25 18.1953C63.6562 17.9766 64.6875 17.8359 65.3438 17.7734C66 17.7109 67.2266 17.5781 69.0234 17.375C71.1016 14.375 72.7812 11.9844 74.0625 10.2031C75.3438 8.40625 76.4297 6.92188 77.3203 5.75C78.2109 4.5625 78.7422 3.88281 78.9141 3.71094C79.2266 3.35156 79.4844 3.21875 79.6875 3.3125C79.9062 3.39062 80.0156 3.71094 80.0156 4.27344C80.0156 4.91406 79.9453 5.4375 79.8047 5.84375C79.6797 6.25 79.4766 6.65625 79.1953 7.0625C78.9141 7.45312 78.7656 7.66406 78.75 7.69531C78.3438 8.36719 77.7578 9.25 76.9922 10.3438C76.2266 11.4219 75.4766 12.4922 74.7422 13.5547C74.0078 14.6172 73.1719 15.875 72.2344 17.3281C73.9844 17.3906 75.7109 17.6172 77.4141 18.0078L73.1953 23.7266C72.0391 23.5703 70.5 23.4922 68.5781 23.4922C68.1094 24.4297 67.7422 25.1641 67.4766 25.6953C67.2266 26.2266 67.0078 26.7344 66.8203 27.2188C66.6484 27.6875 66.5625 28.125 66.5625 28.5312C66.5625 28.7812 66.6328 29.1172 66.7734 29.5391C66.9297 29.9453 67.0078 30.1797 67.0078 30.2422C67.0078 30.5547 66.7734 30.8906 66.3047 31.25C65.8516 31.5938 65.3125 31.8984 64.6875 32.1641C64.0781 32.4297 63.6016 32.5625 63.2578 32.5625C62.6797 32.5625 62.3906 32.125 62.3906 31.25C62.3906 29.4375 63.3203 26.9141 65.1797 23.6797C62.7109 23.8828 59.875 24.25 56.6719 24.7812C55.75 26 54.9141 27.1562 54.1641 28.25C53.4141 29.3438 52.7969 30.2656 52.3125 31.0156C51.8438 31.7656 51.4922 32.2656 51.2578 32.5156C51.0391 32.7656 50.7969 32.8906 50.5312 32.8906C50.0781 32.8906 49.6953 32.6953 49.3828 32.3047C49.2422 32.1484 49.1484 31.9922 49.1016 31.8359C49.0703 31.6797 49.0547 31.5078 49.0547 31.3203C49.0547 31.1328 49.0547 30.9688 49.0547 30.8281C49.0547 30.6406 49.1562 30.3672 49.3594 30.0078C49.5625 29.6484 50.0469 28.9375 50.8125 27.875C51.5781 26.7969 52.1406 25.9844 52.5 25.4375C52.0938 25.4844 51.5703 25.5078 50.9297 25.5078C50.1172 25.5078 49.4531 25.3594 48.9375 25.0625C48.4375 24.7656 48.1875 24.3984 48.1875 23.9609C48.1875 23.4609 48.3203 22.9297 48.5859 22.3672C48.8516 21.7891 49.1953 21.3125 49.6172 20.9375C50.0391 20.5469 50.4609 20.3516 50.8828 20.3516C51.1641 20.3516 51.5 20.4375 51.8906 20.6094L57.9375 19.1094C61.3125 15.4531 63.8281 12.5625 65.4844 10.4375C67.1406 8.3125 67.9688 6.94531 67.9688 6.33594C67.9688 5.99219 67.875 5.71094 67.6875 5.49219C67.5 5.25781 67.2344 5.07812 66.8906 4.95312C66.5625 4.82813 66.1797 4.76562 65.7422 4.76562C65.2266 4.76562 64.4062 4.90625 63.2812 5.1875C62.1719 5.46875 60.8438 5.88281 59.2969 6.42969C57.75 6.97656 55.8203 7.73438 53.5078 8.70312C51.7891 9.40625 50.9297 9.85156 50.9297 10.0391C50.9297 10.2578 51.0469 10.3984 51.2812 10.4609C51.5156 10.5234 51.8125 10.5703 52.1719 10.6016C52.5469 10.6328 52.7344 10.6875 52.7344 10.7656C52.7344 10.8281 52.6406 10.9141 52.4531 11.0234C52.2812 11.1328 52.0391 11.2656 51.7266 11.4219ZM120.469 24.5234V26.0469C117.844 28.9688 115.43 31.375 113.227 33.2656C111.039 35.1719 108.898 36.6328 106.805 37.6484C104.711 38.6797 102.688 39.1953 100.734 39.1953C99.0469 39.1953 97.5938 38.8594 96.375 38.1875C95.1719 37.5156 94.2578 36.5312 93.6328 35.2344C93.0234 33.9531 92.7188 32.4297 92.7188 30.6641C92.7188 29.2734 92.9375 27.8047 93.375 26.2578C93.8281 24.6953 94.4766 23.125 95.3203 21.5469C96.1641 19.9531 97.1953 18.3125 98.4141 16.625C99.6484 14.9375 101.094 13.1641 102.75 11.3047C104.469 9.38281 106.164 7.72656 107.836 6.33594C109.508 4.92969 111.023 3.82812 112.383 3.03125C113.742 2.23438 115 1.64063 116.156 1.25C117.328 0.859375 118.297 0.664062 119.062 0.664062C119.844 0.664062 120.508 0.851562 121.055 1.22656C121.602 1.60156 122.023 2.14844 122.32 2.86719C122.617 3.58594 122.766 4.41406 122.766 5.35156C122.766 7.11719 122.164 9.08594 120.961 11.2578C119.758 13.4141 118.258 15.5 116.461 17.5156C114.664 19.5312 112.945 21.1797 111.305 22.4609C109.68 23.7266 108.508 24.3594 107.789 24.3594C107.305 24.3594 106.852 24.1719 106.43 23.7969C106.023 23.4062 105.82 22.9688 105.82 22.4844C105.82 21.5938 106.289 20.5156 107.227 19.25C108.18 17.9844 109.211 16.8281 110.32 15.7812C111.445 14.7188 112.117 14.1875 112.336 14.1875C112.445 14.1875 112.5 14.2344 112.5 14.3281C112.5 14.4688 112.414 14.7109 112.242 15.0547C112.086 15.3984 112.008 15.6094 112.008 15.6875C112.008 15.8125 112.055 15.875 112.148 15.875C112.414 15.875 113.18 15.1641 114.445 13.7422C115.711 12.3203 116.867 10.7578 117.914 9.05469C118.977 7.33594 119.508 5.92969 119.508 4.83594C119.508 4.38281 119.406 4.03906 119.203 3.80469C119.016 3.55469 118.727 3.42969 118.336 3.42969C117.242 3.42969 115.578 4.32031 113.344 6.10156C111.125 7.86719 108.844 10.125 106.5 12.875C104.172 15.6094 102.227 18.4375 100.664 21.3594C99.1016 24.2812 98.3203 26.8516 98.3203 29.0703C98.3203 30.3516 98.5078 31.4219 98.8828 32.2812C99.2734 33.1406 99.8359 33.8047 100.57 34.2734C101.32 34.7422 102.219 34.9766 103.266 34.9766C105.531 34.9766 108.102 34.0938 110.977 32.3281C113.852 30.5625 117.016 27.9609 120.469 24.5234ZM135.352 24.5703V26.1406C134.32 27.0781 133.492 27.7031 132.867 28.0156C132.242 28.3281 131.344 28.4531 130.172 28.3906C128.141 30.7969 126.352 32 124.805 32C123.93 32 123.133 31.7109 122.414 31.1328C121.695 30.5547 121.117 29.7656 120.68 28.7656C120.258 27.7656 120.047 26.6484 120.047 25.4141C120.047 24.4141 120.375 23.3047 121.031 22.0859C121.703 20.8672 122.562 19.7344 123.609 18.6875C124.672 17.625 125.805 16.7734 127.008 16.1328C128.211 15.4766 129.328 15.1484 130.359 15.1484C131.094 15.1484 131.672 15.2656 132.094 15.5C132.516 15.7188 132.727 16.0312 132.727 16.4375C132.727 16.75 132.547 17.1094 132.188 17.5156C132.781 17.6406 133.188 17.8516 133.406 18.1484C133.625 18.4297 133.734 18.9531 133.734 19.7188C133.734 20.4688 133.555 21.4141 133.195 22.5547C132.852 23.6953 132.375 24.7656 131.766 25.7656L132.188 26.1875H132.539C132.805 26.1875 133.062 26.125 133.312 26C133.578 25.8594 133.812 25.7188 134.016 25.5781C134.219 25.4219 134.664 25.0859 135.352 24.5703ZM130.523 18.4062C129.227 19.1875 128.117 19.8984 127.195 20.5391C126.273 21.1641 125.492 21.8047 124.852 22.4609C124.211 23.1016 123.781 23.75 123.562 24.4062C123.172 26.1562 122.977 27.1016 122.977 27.2422C122.977 28.2734 123.695 28.7891 125.133 28.7891C125.805 28.7891 126.93 28.2109 128.508 27.0547C128.242 26.3203 128.109 25.6172 128.109 24.9453C128.109 23.9609 128.312 22.9609 128.719 21.9453C129.125 20.9141 129.727 19.7344 130.523 18.4062ZM151.125 20.375C148.375 23.4375 147 25.5703 147 26.7734C147 27.4453 147.273 27.7812 147.82 27.7812C148.273 27.7812 148.859 27.5469 149.578 27.0781C150.312 26.5938 151.453 25.7422 153 24.5234V26.1406C150.781 28.3281 149.078 29.9062 147.891 30.875C146.703 31.8438 145.734 32.3281 144.984 32.3281C143.703 32.3281 143.062 31.4844 143.062 29.7969C143.062 29.2969 143.141 28.8047 143.297 28.3203C143.453 27.8359 143.664 27.3359 143.93 26.8203C144.211 26.2891 144.633 25.5391 145.195 24.5703C145.758 23.5859 146.406 22.4766 147.141 21.2422C146.25 21.6953 145.133 22.5938 143.789 23.9375C142.914 24.7812 142.172 25.5859 141.562 26.3516C140.953 27.1016 140.297 27.9453 139.594 28.8828C138.906 29.8047 138.398 30.4297 138.07 30.7578C137.758 31.0703 137.438 31.2266 137.109 31.2266C136.609 31.2266 136.148 30.7031 135.727 29.6562C135.305 28.6094 135.094 27.3906 135.094 26C135.094 25.1406 135.188 24.4688 135.375 23.9844C135.578 23.5 135.969 22.8125 136.547 21.9219C137.625 20.2656 138.555 19.0547 139.336 18.2891C140.117 17.5078 140.867 17.1172 141.586 17.1172C142.086 17.1172 142.484 17.2031 142.781 17.375C143.094 17.5469 143.25 17.8125 143.25 18.1719C143.25 18.3281 143.203 18.4922 143.109 18.6641C143.016 18.8359 142.906 18.9922 142.781 19.1328C142.672 19.2734 142.43 19.5469 142.055 19.9531C139.586 22.6875 138.352 24.4609 138.352 25.2734C138.352 25.7266 138.5 25.9531 138.797 25.9531C138.984 25.9531 139.344 25.6562 139.875 25.0625C140.422 24.4531 141.117 23.6641 141.961 22.6953C142.82 21.7109 143.828 20.6875 144.984 19.625C146.156 18.5625 147.484 17.5391 148.969 16.5547C149.797 15.9766 150.484 15.6875 151.031 15.6875C151.281 15.6875 151.523 16.0312 151.758 16.7188C152.008 17.4062 152.133 18.1016 152.133 18.8047C152.133 19.1484 151.797 19.6719 151.125 20.375ZM152.766 25.2734V24.7109C156.797 20.4609 159.57 17.4844 161.086 15.7812C161.43 13.8594 162.258 12.8984 163.57 12.8984C163.898 12.8984 164.25 12.9922 164.625 13.1797L164.766 13.625C164.703 13.8125 164.672 14.0781 164.672 14.4219C164.672 14.7188 164.781 15.2734 165 16.0859C165.234 16.8828 165.414 17.5547 165.539 18.1016C165.664 18.6484 165.727 19.2656 165.727 19.9531C165.727 20.9844 165.492 21.9766 165.023 22.9297C164.555 23.8672 163.875 24.7734 162.984 25.6484C162.094 26.5078 160.945 27.3906 159.539 28.2969C160.102 28.3906 160.547 28.4375 160.875 28.4375C161.516 28.4375 162.203 28.2812 162.938 27.9688C163.688 27.6406 164.445 27.2109 165.211 26.6797C165.992 26.1328 166.898 25.4297 167.93 24.5703V26.1406C165.93 28.0938 164.141 29.5781 162.562 30.5938C160.984 31.5938 159.625 32.0938 158.484 32.0938C157.016 32.0938 155.656 31.4688 154.406 30.2188C153.672 29.4688 153.211 28.75 153.023 28.0625C152.852 27.375 152.766 26.4453 152.766 25.2734ZM161.508 21.6875L161.086 18.2656C160.117 19.3594 158.047 21.4609 154.875 24.5703C155.812 24.7734 156.453 25.0469 156.797 25.3906C157.141 25.7344 157.625 26.3984 158.25 27.3828C159.312 26.9453 160.125 26.3516 160.688 25.6016C161.266 24.8359 161.555 23.7969 161.555 22.4844C161.555 22.3281 161.547 22.1875 161.531 22.0625C161.531 21.9375 161.523 21.8125 161.508 21.6875ZM176.086 12.4531H177.094C177.922 10.9688 178.672 9.92188 179.344 9.3125C180.016 8.6875 180.781 8.375 181.641 8.375C182.5 8.375 182.93 8.57031 182.93 8.96094C182.93 9.14844 182.594 9.65625 181.922 10.4844C181.25 11.3125 180.742 12.0078 180.398 12.5703C180.93 12.6328 181.398 12.6875 181.805 12.7344C182.227 12.7812 182.555 12.8203 182.789 12.8516C181.898 14.5078 180.781 16.2031 179.438 17.9375C179 17.9062 178.633 17.8828 178.336 17.8672C178.039 17.8359 177.734 17.8125 177.422 17.7969C177.125 17.7656 176.758 17.7344 176.32 17.7031C175.477 19.0625 174.766 20.2812 174.188 21.3594C173.625 22.4219 173.188 23.3984 172.875 24.2891C172.578 25.1797 172.43 26.0234 172.43 26.8203C172.43 27.8984 172.859 28.4375 173.719 28.4375C174.312 28.4375 175.086 28.125 176.039 27.5C177.008 26.8594 178.297 25.8828 179.906 24.5703V26.1406C175.688 30.7188 172.57 33.0078 170.555 33.0078C169.852 33.0078 169.281 32.7344 168.844 32.1875C168.422 31.6406 168.211 30.9375 168.211 30.0781C168.211 29.5 168.328 28.8125 168.562 28.0156C168.812 27.2188 169.25 26.0156 169.875 24.4062C169.656 24.5938 169.445 24.7812 169.242 24.9688C169.055 25.1406 168.875 25.3047 168.703 25.4609C168.547 25.6016 168.375 25.7578 168.188 25.9297C168 26.0859 167.812 26.25 167.625 26.4219V24.8047C169.266 23.4297 171.25 21.0156 173.578 17.5625C173.344 17.5469 173.125 17.5391 172.922 17.5391C172.719 17.5234 172.477 17.5156 172.195 17.5156C171.273 17.5156 170.586 17.5781 170.133 17.7031C169.945 17.75 169.766 17.8047 169.594 17.8672C169.438 17.9141 169.328 17.9375 169.266 17.9375C169.203 17.9375 169.172 17.8906 169.172 17.7969C169.172 17.2812 169.492 16.5078 170.133 15.4766C170.648 14.6016 171.133 13.9531 171.586 13.5312C172.055 13.1094 172.617 12.8281 173.273 12.6875C173.945 12.5312 174.883 12.4531 176.086 12.4531ZM179.625 26.4219V24.8984C180.469 23.8984 181.109 23.0469 181.547 22.3438C181.047 22.1719 180.68 21.9609 180.445 21.7109C180.227 21.4609 180.117 21.0859 180.117 20.5859C180.117 20.0234 180.352 19.3125 180.82 18.4531C181.289 17.5938 181.867 16.7891 182.555 16.0391C183.242 15.2891 183.867 14.8047 184.43 14.5859C184.648 14.4766 184.859 14.4219 185.062 14.4219C185.375 14.4219 185.531 14.5703 185.531 14.8672C185.531 15.1328 185.289 15.6719 184.805 16.4844C188.023 15.9844 190.055 15.7344 190.898 15.7344C191.227 15.7344 191.453 15.7656 191.578 15.8281C191.844 15.9688 192.062 16.2969 192.234 16.8125C192.406 17.3281 192.492 17.8438 192.492 18.3594C192.492 18.6875 192.344 19.0469 192.047 19.4375C191.766 19.8125 191.273 20.3672 190.57 21.1016C189.742 21.9922 189.047 22.9609 188.484 24.0078C187.922 25.0547 187.641 25.8438 187.641 26.375C187.641 27.1094 188.094 27.4766 189 27.4766C189.953 27.4766 191.609 26.5078 193.969 24.5703V26.1406C192.672 27.5 191.602 28.5703 190.758 29.3516C189.914 30.1328 189.133 30.7578 188.414 31.2266C187.695 31.6797 187.055 31.9062 186.492 31.9062C185.836 31.9062 185.289 31.6094 184.852 31.0156C184.414 30.4062 184.195 29.5312 184.195 28.3906C184.195 27.7188 184.367 26.9531 184.711 26.0938C185.055 25.2344 185.555 24.3047 186.211 23.3047C186.883 22.2891 187.633 21.2812 188.461 20.2812C188.023 20.375 187.531 20.4766 186.984 20.5859C186.438 20.6797 185.859 20.7812 185.25 20.8906C184.641 21 184.172 21.0859 183.844 21.1484C182.875 23.0859 181.469 24.8438 179.625 26.4219ZM204.914 23.0234C202.648 26.0234 200.922 28.1562 199.734 29.4219C198.562 30.6875 197.602 31.3203 196.852 31.3203C196.258 31.3203 195.711 31.0781 195.211 30.5938C194.711 30.0938 194.32 29.4297 194.039 28.6016C193.773 27.7578 193.641 26.8594 193.641 25.9062C193.641 25.2812 193.695 24.7188 193.805 24.2188C193.93 23.7188 194.156 23.1719 194.484 22.5781C194.812 21.9688 195.242 21.3125 195.773 20.6094C196.32 19.9062 196.984 19.1094 197.766 18.2188C198.234 17.6719 198.625 17.2109 198.938 16.8359C199.266 16.4609 199.578 16.2109 199.875 16.0859C200.188 15.9453 200.688 15.875 201.375 15.875C201.875 15.875 202.352 15.9453 202.805 16.0859C203.258 16.2109 203.484 16.3438 203.484 16.4844C203.484 16.7656 203.25 17.2734 202.781 18.0078C202.328 18.7422 201.586 19.6406 200.555 20.7031C199.539 21.75 198.359 22.7812 197.016 23.7969C196.719 24.7188 196.57 25.4219 196.57 25.9062C196.57 26.5781 196.828 26.9141 197.344 26.9141C197.531 26.9141 197.844 26.7578 198.281 26.4453C198.719 26.1172 199.453 25.5 200.484 24.5938C201.531 23.6719 202.469 22.8594 203.297 22.1562C203.906 21.625 204.609 20.8359 205.406 19.7891C206.219 18.7266 206.875 17.9297 207.375 17.3984C208.531 16.1797 209.32 15.3906 209.742 15.0312C210.164 14.6562 210.57 14.4688 210.961 14.4688C211.336 14.4688 211.586 14.5859 211.711 14.8203C211.852 15.0547 211.922 15.5312 211.922 16.25C211.922 16.5781 211.891 16.8438 211.828 17.0469C211.766 17.25 211.633 17.5156 211.43 17.8438C211.242 18.1562 210.852 18.7422 210.258 19.6016C209.664 20.4609 208.961 21.4766 208.148 22.6484C207.711 23.2734 207.328 23.9609 207 24.7109C206.672 25.4453 206.508 26 206.508 26.375C206.508 27.1875 206.828 27.5938 207.469 27.5938C208 27.5938 208.617 27.375 209.32 26.9375C210.023 26.5 211.102 25.7109 212.555 24.5703V26.1406C210.727 27.8281 209.375 29.0547 208.5 29.8203C207.625 30.5859 206.867 31.1641 206.227 31.5547C205.586 31.9453 204.977 32.1406 204.398 32.1406C203.086 32.1406 202.43 31.3594 202.43 29.7969C202.43 29.2031 202.625 28.4062 203.016 27.4062C203.406 26.3906 204.039 24.9297 204.914 23.0234ZM226.453 24.6641V26.2344C224.781 27.875 223.414 29.1484 222.352 30.0547C221.305 30.9609 220.32 31.6641 219.398 32.1641C218.492 32.6641 217.602 32.9141 216.727 32.9141C215.867 32.9141 215.078 32.5781 214.359 31.9062C213.641 31.2188 213.078 30.3281 212.672 29.2344C212.266 28.125 212.062 26.9531 212.062 25.7188C212.062 24.6562 212.297 23.7109 212.766 22.8828C213.234 22.0547 214.141 20.9844 215.484 19.6719C217.078 18.1094 218.555 16.9062 219.914 16.0625C221.289 15.2031 222.367 14.7734 223.148 14.7734C223.711 14.7734 224.188 14.9688 224.578 15.3594C224.969 15.75 225.164 16.2422 225.164 16.8359C225.164 17.3359 224.906 18.0469 224.391 18.9688C223.875 19.8906 223.297 20.6953 222.656 21.3828C222.016 22.0547 221.508 22.3906 221.133 22.3906C220.727 22.3906 220.523 22.1719 220.523 21.7344C220.539 21.6094 220.547 21.4922 220.547 21.3828C220.562 21.2734 220.57 21.1641 220.57 21.0547C220.57 20.8672 220.5 20.7656 220.359 20.75C220.234 20.7188 220.078 20.7734 219.891 20.9141C218.328 22.0078 217.258 22.7812 216.68 23.2344C216.102 23.6719 215.641 24.1172 215.297 24.5703C214.969 25.0234 214.805 25.5 214.805 26C214.805 26.9219 215.102 27.6719 215.695 28.25C216.289 28.8281 217.062 29.1172 218.016 29.1172C219 29.1172 220.18 28.7422 221.555 27.9922C222.945 27.2266 224.578 26.1172 226.453 24.6641ZM234.586 12.4531H235.594C236.422 10.9688 237.172 9.92188 237.844 9.3125C238.516 8.6875 239.281 8.375 240.141 8.375C241 8.375 241.43 8.57031 241.43 8.96094C241.43 9.14844 241.094 9.65625 240.422 10.4844C239.75 11.3125 239.242 12.0078 238.898 12.5703C239.43 12.6328 239.898 12.6875 240.305 12.7344C240.727 12.7812 241.055 12.8203 241.289 12.8516C240.398 14.5078 239.281 16.2031 237.938 17.9375C237.5 17.9062 237.133 17.8828 236.836 17.8672C236.539 17.8359 236.234 17.8125 235.922 17.7969C235.625 17.7656 235.258 17.7344 234.82 17.7031C233.977 19.0625 233.266 20.2812 232.688 21.3594C232.125 22.4219 231.688 23.3984 231.375 24.2891C231.078 25.1797 230.93 26.0234 230.93 26.8203C230.93 27.8984 231.359 28.4375 232.219 28.4375C232.812 28.4375 233.586 28.125 234.539 27.5C235.508 26.8594 236.797 25.8828 238.406 24.5703V26.1406C234.188 30.7188 231.07 33.0078 229.055 33.0078C228.352 33.0078 227.781 32.7344 227.344 32.1875C226.922 31.6406 226.711 30.9375 226.711 30.0781C226.711 29.5 226.828 28.8125 227.062 28.0156C227.312 27.2188 227.75 26.0156 228.375 24.4062C228.156 24.5938 227.945 24.7812 227.742 24.9688C227.555 25.1406 227.375 25.3047 227.203 25.4609C227.047 25.6016 226.875 25.7578 226.688 25.9297C226.5 26.0859 226.312 26.25 226.125 26.4219V24.8047C227.766 23.4297 229.75 21.0156 232.078 17.5625C231.844 17.5469 231.625 17.5391 231.422 17.5391C231.219 17.5234 230.977 17.5156 230.695 17.5156C229.773 17.5156 229.086 17.5781 228.633 17.7031C228.445 17.75 228.266 17.8047 228.094 17.8672C227.938 17.9141 227.828 17.9375 227.766 17.9375C227.703 17.9375 227.672 17.8906 227.672 17.7969C227.672 17.2812 227.992 16.5078 228.633 15.4766C229.148 14.6016 229.633 13.9531 230.086 13.5312C230.555 13.1094 231.117 12.8281 231.773 12.6875C232.445 12.5312 233.383 12.4531 234.586 12.4531ZM247.969 14.1406C247.578 14.1406 247.203 13.9922 246.844 13.6953C246.5 13.3984 246.328 13.0234 246.328 12.5703C246.328 11.8828 246.656 11.1172 247.312 10.2734C247.969 9.42969 248.648 9.00781 249.352 9.00781C249.82 9.00781 250.211 9.15625 250.523 9.45312C250.836 9.73438 250.992 10.1484 250.992 10.6953C250.992 11.3672 250.672 12.1094 250.031 12.9219C249.391 13.7344 248.703 14.1406 247.969 14.1406ZM249.562 24.6172V26.3281C248.047 28.2812 246.633 29.7578 245.32 30.7578C244.008 31.7422 242.891 32.2344 241.969 32.2344C240.688 32.2344 239.734 31.5625 239.109 30.2188C238.484 28.875 238.172 27.4062 238.172 25.8125C238.172 25.2031 238.234 24.625 238.359 24.0781C238.484 23.5156 238.633 23.0547 238.805 22.6953C238.977 22.3359 239.297 21.7734 239.766 21.0078C241.984 17.5547 244.016 15.8281 245.859 15.8281C246.812 15.8281 247.289 16.1953 247.289 16.9297C247.289 17.4297 246.977 18.2109 246.352 19.2734C245.742 20.3359 245.195 21.0938 244.711 21.5469C243.352 22.8594 242.461 23.7734 242.039 24.2891C241.633 24.8047 241.43 25.3906 241.43 26.0469C241.43 26.6094 241.641 27.0781 242.062 27.4531C242.484 27.8281 243.031 28.0156 243.703 28.0156C244.438 28.0156 245.242 27.75 246.117 27.2188C247.008 26.6719 248.156 25.8047 249.562 24.6172ZM264.445 24.5703V26.1406C263.414 27.0781 262.586 27.7031 261.961 28.0156C261.336 28.3281 260.438 28.4531 259.266 28.3906C257.234 30.7969 255.445 32 253.898 32C253.023 32 252.227 31.7109 251.508 31.1328C250.789 30.5547 250.211 29.7656 249.773 28.7656C249.352 27.7656 249.141 26.6484 249.141 25.4141C249.141 24.4141 249.469 23.3047 250.125 22.0859C250.797 20.8672 251.656 19.7344 252.703 18.6875C253.766 17.625 254.898 16.7734 256.102 16.1328C257.305 15.4766 258.422 15.1484 259.453 15.1484C260.188 15.1484 260.766 15.2656 261.188 15.5C261.609 15.7188 261.82 16.0312 261.82 16.4375C261.82 16.75 261.641 17.1094 261.281 17.5156C261.875 17.6406 262.281 17.8516 262.5 18.1484C262.719 18.4297 262.828 18.9531 262.828 19.7188C262.828 20.4688 262.648 21.4141 262.289 22.5547C261.945 23.6953 261.469 24.7656 260.859 25.7656L261.281 26.1875H261.633C261.898 26.1875 262.156 26.125 262.406 26C262.672 25.8594 262.906 25.7188 263.109 25.5781C263.312 25.4219 263.758 25.0859 264.445 24.5703ZM259.617 18.4062C258.32 19.1875 257.211 19.8984 256.289 20.5391C255.367 21.1641 254.586 21.8047 253.945 22.4609C253.305 23.1016 252.875 23.75 252.656 24.4062C252.266 26.1562 252.07 27.1016 252.07 27.2422C252.07 28.2734 252.789 28.7891 254.227 28.7891C254.898 28.7891 256.023 28.2109 257.602 27.0547C257.336 26.3203 257.203 25.6172 257.203 24.9453C257.203 23.9609 257.406 22.9609 257.812 21.9453C258.219 20.9141 258.82 19.7344 259.617 18.4062ZM280.219 20.375C277.469 23.4375 276.094 25.5703 276.094 26.7734C276.094 27.4453 276.367 27.7812 276.914 27.7812C277.367 27.7812 277.953 27.5469 278.672 27.0781C279.406 26.5938 280.547 25.7422 282.094 24.5234V26.1406C279.875 28.3281 278.172 29.9062 276.984 30.875C275.797 31.8438 274.828 32.3281 274.078 32.3281C272.797 32.3281 272.156 31.4844 272.156 29.7969C272.156 29.2969 272.234 28.8047 272.391 28.3203C272.547 27.8359 272.758 27.3359 273.023 26.8203C273.305 26.2891 273.727 25.5391 274.289 24.5703C274.852 23.5859 275.5 22.4766 276.234 21.2422C275.344 21.6953 274.227 22.5938 272.883 23.9375C272.008 24.7812 271.266 25.5859 270.656 26.3516C270.047 27.1016 269.391 27.9453 268.688 28.8828C268 29.8047 267.492 30.4297 267.164 30.7578C266.852 31.0703 266.531 31.2266 266.203 31.2266C265.703 31.2266 265.242 30.7031 264.82 29.6562C264.398 28.6094 264.188 27.3906 264.188 26C264.188 25.1406 264.281 24.4688 264.469 23.9844C264.672 23.5 265.062 22.8125 265.641 21.9219C266.719 20.2656 267.648 19.0547 268.43 18.2891C269.211 17.5078 269.961 17.1172 270.68 17.1172C271.18 17.1172 271.578 17.2031 271.875 17.375C272.188 17.5469 272.344 17.8125 272.344 18.1719C272.344 18.3281 272.297 18.4922 272.203 18.6641C272.109 18.8359 272 18.9922 271.875 19.1328C271.766 19.2734 271.523 19.5469 271.148 19.9531C268.68 22.6875 267.445 24.4609 267.445 25.2734C267.445 25.7266 267.594 25.9531 267.891 25.9531C268.078 25.9531 268.438 25.6562 268.969 25.0625C269.516 24.4531 270.211 23.6641 271.055 22.6953C271.914 21.7109 272.922 20.6875 274.078 19.625C275.25 18.5625 276.578 17.5391 278.062 16.5547C278.891 15.9766 279.578 15.6875 280.125 15.6875C280.375 15.6875 280.617 16.0312 280.852 16.7188C281.102 17.4062 281.227 18.1016 281.227 18.8047C281.227 19.1484 280.891 19.6719 280.219 20.375ZM324.656 24.5234V26.0469C322.031 28.9688 319.617 31.375 317.414 33.2656C315.227 35.1719 313.086 36.6328 310.992 37.6484C308.898 38.6797 306.875 39.1953 304.922 39.1953C303.234 39.1953 301.781 38.8594 300.562 38.1875C299.359 37.5156 298.445 36.5312 297.82 35.2344C297.211 33.9531 296.906 32.4297 296.906 30.6641C296.906 29.2734 297.125 27.8047 297.562 26.2578C298.016 24.6953 298.664 23.125 299.508 21.5469C300.352 19.9531 301.383 18.3125 302.602 16.625C303.836 14.9375 305.281 13.1641 306.938 11.3047C308.656 9.38281 310.352 7.72656 312.023 6.33594C313.695 4.92969 315.211 3.82812 316.57 3.03125C317.93 2.23438 319.188 1.64063 320.344 1.25C321.516 0.859375 322.484 0.664062 323.25 0.664062C324.031 0.664062 324.695 0.851562 325.242 1.22656C325.789 1.60156 326.211 2.14844 326.508 2.86719C326.805 3.58594 326.953 4.41406 326.953 5.35156C326.953 7.11719 326.352 9.08594 325.148 11.2578C323.945 13.4141 322.445 15.5 320.648 17.5156C318.852 19.5312 317.133 21.1797 315.492 22.4609C313.867 23.7266 312.695 24.3594 311.977 24.3594C311.492 24.3594 311.039 24.1719 310.617 23.7969C310.211 23.4062 310.008 22.9688 310.008 22.4844C310.008 21.5938 310.477 20.5156 311.414 19.25C312.367 17.9844 313.398 16.8281 314.508 15.7812C315.633 14.7188 316.305 14.1875 316.523 14.1875C316.633 14.1875 316.688 14.2344 316.688 14.3281C316.688 14.4688 316.602 14.7109 316.43 15.0547C316.273 15.3984 316.195 15.6094 316.195 15.6875C316.195 15.8125 316.242 15.875 316.336 15.875C316.602 15.875 317.367 15.1641 318.633 13.7422C319.898 12.3203 321.055 10.7578 322.102 9.05469C323.164 7.33594 323.695 5.92969 323.695 4.83594C323.695 4.38281 323.594 4.03906 323.391 3.80469C323.203 3.55469 322.914 3.42969 322.523 3.42969C321.43 3.42969 319.766 4.32031 317.531 6.10156C315.312 7.86719 313.031 10.125 310.688 12.875C308.359 15.6094 306.414 18.4375 304.852 21.3594C303.289 24.2812 302.508 26.8516 302.508 29.0703C302.508 30.3516 302.695 31.4219 303.07 32.2812C303.461 33.1406 304.023 33.8047 304.758 34.2734C305.508 34.7422 306.406 34.9766 307.453 34.9766C309.719 34.9766 312.289 34.0938 315.164 32.3281C318.039 30.5625 321.203 27.9609 324.656 24.5234ZM329.578 32.0938C329.312 32.0938 329.086 31.9922 328.898 31.7891C328.711 31.5859 328.617 31.3047 328.617 30.9453C328.617 30.6641 328.781 30.1641 329.109 29.4453C329.453 28.7109 329.875 28.0625 330.375 27.5C330.891 26.9219 331.422 26.6328 331.969 26.6328C332.641 26.6328 332.977 27.0312 332.977 27.8281C332.977 28.2656 332.797 28.8359 332.438 29.5391C332.078 30.2266 331.633 30.8281 331.102 31.3438C330.57 31.8438 330.062 32.0938 329.578 32.0938ZM362.648 4.78906C363.383 5.11719 363.914 5.65625 364.242 6.40625C364.586 7.14062 364.758 8.23438 364.758 9.6875C364.758 11.8906 364.312 14.2656 363.422 16.8125C362.547 19.3594 361.312 21.75 359.719 23.9844C358.141 26.2188 356.328 28.0625 354.281 29.5156C351.984 31.1406 350.102 31.9531 348.633 31.9531C347.492 31.9531 346.422 31.6094 345.422 30.9219C344.422 30.2344 343.625 29.2578 343.031 27.9922C342.438 26.7109 342.141 25.2188 342.141 23.5156C342.141 21.1406 342.789 18.6484 344.086 16.0391C345.398 13.4141 347.055 11.0469 349.055 8.9375C351.07 6.82812 353.164 5.20312 355.336 4.0625C357.523 2.92187 359.398 2.52344 360.961 2.86719C361.977 3.08594 362.539 3.72656 362.648 4.78906ZM357.258 9.38281L358.078 7.67188C357.156 8.14062 356.344 8.60156 355.641 9.05469C354.938 9.50781 354.125 10.1484 353.203 10.9766C352.297 11.8047 351.344 12.8438 350.344 14.0938C348.719 16.1719 347.492 18.1875 346.664 20.1406C345.836 22.0781 345.422 23.7266 345.422 25.0859C345.422 27.0391 346.078 28.0156 347.391 28.0156C348.141 28.0156 349.211 27.6094 350.602 26.7969C352.008 25.9844 353.492 24.8672 355.055 23.4453C356.555 22.0703 357.867 20.5312 358.992 18.8281C360.133 17.125 361 15.4453 361.594 13.7891C362.203 12.1328 362.508 10.7188 362.508 9.54688C362.508 8.79688 362.344 8.21875 362.016 7.8125C361.688 7.39062 361.273 7.17969 360.773 7.17969C360.305 7.17969 359.805 7.35938 359.273 7.71875C358.758 8.07812 358.086 8.63281 357.258 9.38281Z" fill="black"/>
</svg></div>
        <div className="sub-grp">
          <h3>Office</h3>
          <div className="content">
            <p>+800 123 456 789</p>
            <p>shconstructions@sh.com</p>
            <p>
              22/31, REDBUD DRIVE
              <p>WHITESTONE, INDIA 124093</p>
            </p>
            <p>
              MON – FRI: 9 AM – 7 PM <p>SAT – SUN: CLOSED</p>
            </p>
          </div>
        </div>
        <div className="sub-grp">
            <h3>Links</h3>
            <div className="content links">
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Blog</p>
                <p>Contact</p>
                </div>

        </div>
        <div className="sub-grp">
            <h3>Social Links</h3>
            <div className="logos">
                <div className="social">
                <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="social">
                <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="social">
                <i class="fa-brands fa-instagram"></i>
                 </div>
                 <div className="social">
                <i class="fa-brands fa-linkedin"></i>
                 </div>

            </div>
        </div>
      </div>
      <p className="footer-clip" >
      © 2022, ALL RIGHTS RESERVED | S.H. Constructions
      </p>
      </div>
    </div>
  );
}

export default Footer;
