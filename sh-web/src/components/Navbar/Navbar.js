import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Navbar() {

  const [showNav, setShowNav] = useState(false);

  const handleNav = ()=>
  {
    setShowNav(!showNav);
    const el = document.querySelector(".nav-items");
    if(el.classList.contains("show"))
    el.classList.remove("show");
    else
    el.classList.add("show");

    console.log("here")
    

  
  }
  return (
    <div className="navbar p-2">
      <div className="logo cursive">
        <svg
          width="397"
          height="45"
          viewBox="0 0 397 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.2251 28.2388C27.7775 27.4152 27.1061 26.6722 26.2109 26.0098C25.3158 25.3473 24.3042 24.8192 23.1763 24.4253C22.0662 24.0135 20.9025 23.7091 19.6851 23.5122C16.0685 22.9751 12.6937 21.8024 9.56055 19.9941C9.29199 19.8509 9.00553 19.5465 8.70117 19.0811C8.39681 18.6156 8.24463 18.168 8.24463 17.7383C8.24463 16.1628 8.50423 14.5872 9.02344 13.0117C9.56055 11.4183 10.2409 10.174 11.0645 9.27881C12.3893 7.79281 14.7705 6.49479 18.208 5.38477C21.6634 4.27474 25.5485 3.71973 29.8633 3.71973C32.4414 3.71973 34.4287 3.91667 35.8252 4.31055C37.2396 4.70443 37.9468 5.31315 37.9468 6.13672C37.9468 7.47949 37.7588 8.5179 37.3828 9.25195C37.0247 9.986 36.6309 10.4784 36.2012 10.729C35.7894 10.9618 35.0553 11.284 33.999 11.6958C32.8711 12.0897 31.8864 12.5015 31.0449 12.9312C30.2214 13.3608 29.5142 13.7726 28.9233 14.1665C28.3325 14.5604 27.9655 14.7573 27.8223 14.7573C27.6432 14.7573 27.5537 14.6857 27.5537 14.5425C27.5537 14.2381 27.867 13.7816 28.4937 13.1729C29.1382 12.5462 29.9259 12.0002 30.8569 11.5347C31.8416 11.0155 32.334 10.6842 32.334 10.541C32.334 10.3083 31.7879 10.1919 30.6958 10.1919C27.3836 10.1919 24.3221 10.4873 21.5112 11.0781C18.7004 11.6689 16.4803 12.4478 14.8511 13.4146C13.2397 14.3813 12.4341 15.366 12.4341 16.3687C12.4341 16.9953 12.7653 17.4429 13.4277 17.7114C14.1081 17.9621 15.5941 18.3918 17.8857 19.0005C20.1774 19.6092 22.2274 20.3075 24.0356 21.0952C26.6317 22.2052 28.5563 23.36 29.8096 24.5596C31.0628 25.7591 31.6895 27.1019 31.6895 28.5879C31.6895 29.6084 31.4388 30.6379 30.9375 31.6763C30.4541 32.6968 29.738 33.6367 28.7891 34.4961C27.8402 35.3555 26.748 36.0627 25.5127 36.6177C24.4564 37.0653 23.1226 37.486 21.5112 37.8799C19.9178 38.2738 18.1812 38.5781 16.3013 38.793C14.4393 39.0257 12.6579 39.1421 10.957 39.1421C7.82389 39.1421 5.29948 38.8467 3.38379 38.2559C1.486 37.665 0.537109 36.7699 0.537109 35.5703C0.537109 35.0332 0.859375 34.2007 1.50391 33.0728C2.14844 31.9269 2.90934 31.1571 3.78662 30.7632C4.55648 30.4588 5.29948 30.2887 6.01562 30.2529C6.73177 30.1992 7.08984 30.2798 7.08984 30.4946C7.08984 30.5483 7.06299 30.6021 7.00928 30.6558C6.95557 30.7095 6.8929 30.7542 6.82129 30.79C6.74967 30.8258 6.67806 30.8617 6.60645 30.8975C6.24837 31.0407 5.95296 31.1571 5.72021 31.2466C5.50537 31.3182 5.32633 31.3988 5.18311 31.4883C5.05778 31.5599 4.99512 31.6673 4.99512 31.8105C4.99512 32.1865 6.84814 32.3745 10.5542 32.3745C13.7769 32.3745 16.4176 32.2581 18.4766 32.0254C20.5355 31.7926 22.3527 31.3719 23.9282 30.7632C25.5037 30.1545 26.936 29.313 28.2251 28.2388ZM39.0479 36.1074C38.7435 36.1074 38.4839 35.991 38.269 35.7583C38.0542 35.5256 37.9468 35.2033 37.9468 34.7915C37.9468 34.4692 38.1348 33.8963 38.5107 33.0728C38.9046 32.2313 39.388 31.4883 39.9609 30.8438C40.5518 30.1813 41.1605 29.8501 41.7871 29.8501C42.557 29.8501 42.9419 30.3066 42.9419 31.2197C42.9419 31.721 42.736 32.3745 42.3242 33.1802C41.9124 33.9679 41.4022 34.6572 40.7935 35.248C40.1847 35.821 39.6029 36.1074 39.0479 36.1074ZM59.27 12.4209L53.4961 15.4556C52.6009 15.9032 52.0011 16.127 51.6968 16.127C51.1418 16.127 50.7389 15.9569 50.4883 15.6167C50.2197 15.2586 50.0854 14.7126 50.0854 13.9785C50.0854 13.137 50.2645 12.1702 50.6226 11.0781C50.9806 9.9681 51.3924 9.15348 51.8579 8.63428C52.3413 8.09717 53.4692 7.36312 55.2417 6.43213C57.0321 5.48324 59.1805 4.53434 61.687 3.58545C64.1935 2.63656 66.8075 1.8488 69.5288 1.22217C72.2502 0.59554 74.7388 0.282227 76.9946 0.282227C78.5701 0.282227 79.7339 0.532878 80.4858 1.03418C81.2378 1.53548 81.6138 2.86035 81.6138 5.00879C81.6138 6.17253 81.2109 7.47054 80.4053 8.90283C79.6175 10.3172 78.6597 11.6958 77.5317 13.0386C76.4217 14.3813 74.3538 16.7625 71.3281 20.1821C72.9395 19.9315 74.1211 19.7703 74.873 19.6987C75.625 19.6271 77.0304 19.4749 79.0894 19.2422C81.4705 15.8047 83.3952 13.0654 84.8633 11.0244C86.3314 8.96549 87.5757 7.26465 88.5962 5.92188C89.6167 4.5612 90.2254 3.78239 90.4224 3.58545C90.7804 3.17367 91.0758 3.02148 91.3086 3.12891C91.5592 3.21842 91.6846 3.58545 91.6846 4.22998C91.6846 4.96403 91.604 5.5638 91.4429 6.0293C91.2996 6.49479 91.0669 6.96029 90.7446 7.42578C90.4224 7.87337 90.2523 8.11507 90.2344 8.15088C89.7689 8.92074 89.0975 9.93229 88.2202 11.1855C87.3429 12.4209 86.4836 13.6473 85.6421 14.8647C84.8006 16.0822 83.8428 17.5234 82.7686 19.1885C84.7738 19.2601 86.7521 19.5197 88.7036 19.9673L83.8696 26.52C82.5448 26.341 80.7812 26.2515 78.5791 26.2515C78.042 27.3257 77.6213 28.1672 77.3169 28.7759C77.0304 29.3846 76.7798 29.9665 76.5649 30.5215C76.368 31.0586 76.2695 31.5599 76.2695 32.0254C76.2695 32.3118 76.3501 32.6968 76.5112 33.1802C76.6903 33.6457 76.7798 33.9142 76.7798 33.9858C76.7798 34.3439 76.5112 34.7288 75.9741 35.1406C75.4549 35.5345 74.8372 35.8836 74.1211 36.188C73.4229 36.4924 72.8768 36.6445 72.4829 36.6445C71.8205 36.6445 71.4893 36.1432 71.4893 35.1406C71.4893 33.0638 72.5545 30.1724 74.6851 26.4663C71.8563 26.6991 68.6068 27.1198 64.9365 27.7285C63.8802 29.125 62.9224 30.4499 62.063 31.7031C61.2036 32.9564 60.4964 34.0127 59.9414 34.8721C59.4043 35.7314 59.0015 36.3044 58.7329 36.5908C58.4823 36.8773 58.2048 37.0205 57.9004 37.0205C57.3812 37.0205 56.9425 36.7967 56.5845 36.3491C56.4233 36.1701 56.3159 35.991 56.2622 35.812C56.2264 35.633 56.2085 35.436 56.2085 35.2212C56.2085 35.0063 56.2085 34.8184 56.2085 34.6572C56.2085 34.4424 56.3249 34.1291 56.5576 33.7173C56.7904 33.3055 57.3454 32.4909 58.2227 31.2734C59.0999 30.0381 59.7445 29.1071 60.1562 28.4805C59.6908 28.5342 59.091 28.561 58.3569 28.561C57.4259 28.561 56.665 28.391 56.0742 28.0508C55.5013 27.7106 55.2148 27.2899 55.2148 26.7886C55.2148 26.2157 55.367 25.6069 55.6714 24.9624C55.9757 24.3 56.3696 23.7539 56.853 23.3242C57.3364 22.8766 57.8198 22.6528 58.3032 22.6528C58.6255 22.6528 59.0104 22.7513 59.458 22.9482L66.3867 21.2295C70.2539 17.04 73.1364 13.7279 75.0342 11.293C76.932 8.85807 77.8809 7.2915 77.8809 6.59326C77.8809 6.19938 77.7734 5.87712 77.5586 5.62646C77.3438 5.35791 77.0394 5.15202 76.6455 5.00879C76.2695 4.86556 75.8309 4.79395 75.3296 4.79395C74.7388 4.79395 73.7988 4.95508 72.5098 5.27734C71.2386 5.59961 69.7168 6.07406 67.9443 6.70068C66.1719 7.32731 63.9608 8.19564 61.311 9.30566C59.3416 10.1113 58.3569 10.6216 58.3569 10.8364C58.3569 11.0871 58.4912 11.2482 58.7598 11.3198C59.0283 11.3914 59.3685 11.4451 59.7803 11.481C60.21 11.5168 60.4248 11.5794 60.4248 11.6689C60.4248 11.7406 60.3174 11.839 60.1025 11.9644C59.9056 12.0897 59.6281 12.2419 59.27 12.4209ZM138.037 27.4331V29.1787C135.029 32.5267 132.263 35.2839 129.739 37.4502C127.232 39.6344 124.779 41.3084 122.38 42.4722C119.981 43.6538 117.663 44.2446 115.425 44.2446C113.491 44.2446 111.826 43.8597 110.43 43.0898C109.051 42.32 108.004 41.1921 107.288 39.7061C106.589 38.238 106.24 36.4924 106.24 34.4692C106.24 32.8758 106.491 31.1929 106.992 29.4204C107.511 27.63 108.254 25.8307 109.221 24.0225C110.188 22.1963 111.37 20.3164 112.766 18.3828C114.181 16.4492 115.837 14.4172 117.734 12.2866C119.704 10.0845 121.646 8.18669 123.562 6.59326C125.478 4.98193 127.214 3.71973 128.772 2.80664C130.33 1.89355 131.771 1.21322 133.096 0.765625C134.438 0.318034 135.549 0.0942383 136.426 0.0942383C137.321 0.0942383 138.082 0.309082 138.708 0.73877C139.335 1.16846 139.819 1.79508 140.159 2.61865C140.499 3.44222 140.669 4.39111 140.669 5.46533C140.669 7.48844 139.98 9.7443 138.601 12.2329C137.222 14.7036 135.504 17.0938 133.445 19.4033C131.386 21.7129 129.417 23.6017 127.537 25.0698C125.675 26.52 124.332 27.2451 123.508 27.2451C122.953 27.2451 122.434 27.0303 121.951 26.6006C121.485 26.153 121.252 25.6517 121.252 25.0967C121.252 24.0762 121.79 22.8408 122.864 21.3906C123.956 19.9404 125.138 18.6156 126.409 17.416C127.698 16.1986 128.468 15.5898 128.718 15.5898C128.844 15.5898 128.906 15.6436 128.906 15.751C128.906 15.9121 128.808 16.1896 128.611 16.5835C128.432 16.9774 128.342 17.2191 128.342 17.3086C128.342 17.4518 128.396 17.5234 128.503 17.5234C128.808 17.5234 129.685 16.7088 131.135 15.0796C132.585 13.4504 133.91 11.66 135.11 9.7085C136.327 7.7391 136.936 6.12777 136.936 4.87451C136.936 4.35531 136.82 3.96143 136.587 3.69287C136.372 3.40641 136.041 3.26318 135.593 3.26318C134.34 3.26318 132.433 4.28369 129.873 6.32471C127.331 8.34782 124.717 10.9349 122.031 14.0859C119.364 17.2191 117.135 20.4596 115.344 23.8076C113.554 27.1556 112.659 30.1007 112.659 32.6431C112.659 34.1112 112.874 35.3376 113.303 36.3223C113.751 37.307 114.395 38.0679 115.237 38.605C116.096 39.1421 117.126 39.4106 118.325 39.4106C120.921 39.4106 123.866 38.3991 127.161 36.376C130.455 34.3529 134.08 31.3719 138.037 27.4331ZM155.09 27.4868V29.2861C153.909 30.3604 152.96 31.0765 152.244 31.4346C151.528 31.7926 150.498 31.9359 149.155 31.8643C146.828 34.6214 144.778 36 143.005 36C142.003 36 141.09 35.6688 140.266 35.0063C139.443 34.3439 138.78 33.4398 138.279 32.2939C137.795 31.1481 137.554 29.868 137.554 28.4536C137.554 27.3078 137.93 26.0366 138.682 24.6401C139.451 23.2437 140.436 21.9456 141.636 20.7461C142.853 19.5286 144.151 18.5529 145.53 17.8188C146.908 17.0669 148.188 16.6909 149.37 16.6909C150.212 16.6909 150.874 16.8252 151.357 17.0938C151.841 17.3444 152.083 17.7025 152.083 18.168C152.083 18.526 151.877 18.9378 151.465 19.4033C152.145 19.5465 152.611 19.7882 152.861 20.1284C153.112 20.4507 153.237 21.0505 153.237 21.9277C153.237 22.7871 153.031 23.8703 152.62 25.1772C152.226 26.4842 151.68 27.7106 150.981 28.8564L151.465 29.3398H151.868C152.172 29.3398 152.467 29.2682 152.754 29.125C153.058 28.9639 153.327 28.8027 153.56 28.6416C153.792 28.4626 154.303 28.0776 155.09 27.4868ZM149.558 20.4238C148.072 21.319 146.801 22.1336 145.745 22.8677C144.688 23.5838 143.793 24.3179 143.059 25.0698C142.325 25.8039 141.833 26.5469 141.582 27.2988C141.134 29.304 140.911 30.3872 140.911 30.5483C140.911 31.73 141.734 32.3208 143.381 32.3208C144.151 32.3208 145.44 31.6584 147.249 30.3335C146.944 29.492 146.792 28.6864 146.792 27.9165C146.792 26.7886 147.025 25.6427 147.49 24.479C147.956 23.2974 148.645 21.9456 149.558 20.4238ZM173.164 22.6797C170.013 26.1888 168.438 28.6326 168.438 30.0112C168.438 30.7811 168.751 31.166 169.377 31.166C169.897 31.166 170.568 30.8975 171.392 30.3604C172.233 29.8053 173.54 28.8296 175.312 27.4331V29.2861C172.77 31.7926 170.819 33.6009 169.458 34.7109C168.097 35.821 166.987 36.376 166.128 36.376C164.66 36.376 163.926 35.4092 163.926 33.4756C163.926 32.9027 164.015 32.3387 164.194 31.7837C164.373 31.2287 164.615 30.6558 164.919 30.0649C165.242 29.4562 165.725 28.5968 166.37 27.4868C167.014 26.3589 167.757 25.0877 168.599 23.6733C167.578 24.1925 166.298 25.222 164.758 26.7617C163.756 27.7285 162.905 28.6506 162.207 29.5278C161.509 30.3872 160.757 31.354 159.951 32.4282C159.163 33.4845 158.582 34.2007 158.206 34.5767C157.847 34.9347 157.48 35.1138 157.104 35.1138C156.532 35.1138 156.003 34.514 155.52 33.3145C155.037 32.1149 154.795 30.7184 154.795 29.125C154.795 28.1403 154.902 27.3704 155.117 26.8154C155.35 26.2604 155.798 25.4727 156.46 24.4521C157.695 22.5544 158.761 21.1668 159.656 20.2896C160.551 19.3944 161.41 18.9468 162.234 18.9468C162.807 18.9468 163.263 19.0452 163.604 19.2422C163.962 19.4391 164.141 19.7435 164.141 20.1553C164.141 20.3343 164.087 20.5223 163.979 20.7192C163.872 20.9162 163.747 21.0952 163.604 21.2563C163.478 21.4175 163.201 21.7308 162.771 22.1963C159.942 25.3294 158.528 27.3615 158.528 28.2925C158.528 28.8117 158.698 29.0713 159.038 29.0713C159.253 29.0713 159.665 28.7311 160.273 28.0508C160.9 27.3525 161.697 26.4484 162.664 25.3384C163.648 24.2104 164.803 23.0378 166.128 21.8203C167.471 20.6029 168.993 19.4302 170.693 18.3022C171.642 17.6398 172.43 17.3086 173.057 17.3086C173.343 17.3086 173.621 17.7025 173.889 18.4902C174.176 19.278 174.319 20.0747 174.319 20.8804C174.319 21.2743 173.934 21.874 173.164 22.6797ZM175.044 28.2925V27.6479C179.663 22.7782 182.841 19.3675 184.578 17.416C184.972 15.2139 185.92 14.1128 187.424 14.1128C187.8 14.1128 188.203 14.2202 188.633 14.4351L188.794 14.9453C188.722 15.1602 188.687 15.4645 188.687 15.8584C188.687 16.1986 188.812 16.8341 189.062 17.7651C189.331 18.6782 189.537 19.4481 189.68 20.0747C189.823 20.7013 189.895 21.4085 189.895 22.1963C189.895 23.3779 189.626 24.5148 189.089 25.6069C188.552 26.6812 187.773 27.7196 186.753 28.7222C185.732 29.7069 184.417 30.7184 182.805 31.7568C183.45 31.8643 183.96 31.918 184.336 31.918C185.07 31.918 185.858 31.7389 186.699 31.3809C187.559 31.0049 188.427 30.5125 189.304 29.9038C190.199 29.2772 191.238 28.4715 192.419 27.4868V29.2861C190.128 31.5241 188.078 33.2249 186.27 34.3887C184.461 35.5345 182.904 36.1074 181.597 36.1074C179.914 36.1074 178.356 35.3913 176.924 33.959C176.082 33.0996 175.554 32.276 175.339 31.4883C175.142 30.7005 175.044 29.6353 175.044 28.2925ZM185.061 24.1836L184.578 20.2627C183.468 21.516 181.095 23.924 177.461 27.4868C178.535 27.7196 179.269 28.0329 179.663 28.4268C180.057 28.8206 180.612 29.5815 181.328 30.7095C182.546 30.2082 183.477 29.5278 184.121 28.6685C184.784 27.7912 185.115 26.6006 185.115 25.0967C185.115 24.9176 185.106 24.7565 185.088 24.6133C185.088 24.4701 185.079 24.3268 185.061 24.1836ZM201.765 13.6025H202.92C203.869 11.9017 204.728 10.7021 205.498 10.0039C206.268 9.28776 207.145 8.92969 208.13 8.92969C209.115 8.92969 209.607 9.15348 209.607 9.60107C209.607 9.81592 209.222 10.3978 208.452 11.3467C207.682 12.2956 207.1 13.0923 206.707 13.7368C207.315 13.8084 207.852 13.8711 208.318 13.9248C208.801 13.9785 209.177 14.0233 209.446 14.0591C208.425 15.9569 207.145 17.8994 205.605 19.8867C205.104 19.8509 204.683 19.8241 204.343 19.8062C204.003 19.7703 203.654 19.7435 203.296 19.7256C202.956 19.6898 202.535 19.654 202.034 19.6182C201.067 21.1758 200.252 22.5723 199.59 23.8076C198.945 25.0251 198.444 26.144 198.086 27.1646C197.746 28.1851 197.576 29.1519 197.576 30.0649C197.576 31.3003 198.068 31.918 199.053 31.918C199.733 31.918 200.619 31.5599 201.711 30.8438C202.821 30.1097 204.299 28.9907 206.143 27.4868V29.2861C201.309 34.5319 197.737 37.1548 195.427 37.1548C194.622 37.1548 193.968 36.8415 193.467 36.2148C192.983 35.5882 192.742 34.7826 192.742 33.7979C192.742 33.1354 192.876 32.3477 193.145 31.4346C193.431 30.5215 193.932 29.1429 194.648 27.2988C194.398 27.5137 194.156 27.7285 193.923 27.9434C193.708 28.1403 193.503 28.3283 193.306 28.5073C193.127 28.6685 192.93 28.8475 192.715 29.0444C192.5 29.2235 192.285 29.4115 192.07 29.6084V27.7554C193.95 26.1799 196.224 23.4137 198.892 19.457C198.623 19.4391 198.372 19.4302 198.14 19.4302C197.907 19.4123 197.629 19.4033 197.307 19.4033C196.251 19.4033 195.463 19.4749 194.944 19.6182C194.729 19.6719 194.523 19.7345 194.326 19.8062C194.147 19.8599 194.022 19.8867 193.95 19.8867C193.879 19.8867 193.843 19.833 193.843 19.7256C193.843 19.1348 194.21 18.2485 194.944 17.0669C195.535 16.0643 196.09 15.3213 196.609 14.8379C197.146 14.3545 197.791 14.0322 198.542 13.8711C199.312 13.6921 200.387 13.6025 201.765 13.6025ZM205.82 29.6084V27.8628C206.787 26.717 207.521 25.7412 208.022 24.9355C207.45 24.7386 207.029 24.4969 206.76 24.2104C206.51 23.924 206.384 23.4943 206.384 22.9214C206.384 22.2769 206.653 21.4622 207.19 20.4775C207.727 19.4928 208.389 18.5708 209.177 17.7114C209.965 16.8521 210.681 16.297 211.326 16.0464C211.576 15.9211 211.818 15.8584 212.051 15.8584C212.409 15.8584 212.588 16.0285 212.588 16.3687C212.588 16.673 212.31 17.2907 211.755 18.2217C215.444 17.6488 217.771 17.3623 218.738 17.3623C219.114 17.3623 219.373 17.3981 219.517 17.4697C219.821 17.6309 220.072 18.0068 220.269 18.5977C220.465 19.1885 220.564 19.7793 220.564 20.3701C220.564 20.7461 220.394 21.1579 220.054 21.6055C219.731 22.0352 219.167 22.6707 218.362 23.5122C217.413 24.5327 216.616 25.6427 215.972 26.8423C215.327 28.0418 215.005 28.946 215.005 29.5547C215.005 30.3962 215.524 30.8169 216.562 30.8169C217.655 30.8169 219.552 29.7069 222.256 27.4868V29.2861C220.77 30.8438 219.543 32.0701 218.577 32.9653C217.61 33.8605 216.715 34.5767 215.891 35.1138C215.068 35.633 214.333 35.8926 213.689 35.8926C212.937 35.8926 212.31 35.5524 211.809 34.8721C211.308 34.1738 211.057 33.1712 211.057 31.8643C211.057 31.0944 211.254 30.2171 211.648 29.2324C212.042 28.2477 212.615 27.1825 213.367 26.0366C214.137 24.8729 214.996 23.7181 215.945 22.5723C215.444 22.6797 214.88 22.7961 214.253 22.9214C213.626 23.0288 212.964 23.1452 212.266 23.2705C211.567 23.3958 211.03 23.4943 210.654 23.5659C209.544 25.786 207.933 27.8001 205.82 29.6084ZM234.797 25.7144C232.201 29.1519 230.223 31.5957 228.862 33.0459C227.52 34.4961 226.418 35.2212 225.559 35.2212C224.879 35.2212 224.252 34.9437 223.679 34.3887C223.106 33.8158 222.659 33.0549 222.336 32.106C222.032 31.1392 221.88 30.1097 221.88 29.0176C221.88 28.3014 221.943 27.6569 222.068 27.084C222.211 26.5111 222.471 25.8844 222.847 25.2041C223.223 24.5059 223.715 23.7539 224.324 22.9482C224.95 22.1426 225.711 21.2295 226.606 20.209C227.144 19.5824 227.591 19.0542 227.949 18.6245C228.325 18.1948 228.683 17.9084 229.023 17.7651C229.382 17.604 229.954 17.5234 230.742 17.5234C231.315 17.5234 231.861 17.604 232.38 17.7651C232.9 17.9084 233.159 18.0605 233.159 18.2217C233.159 18.5439 232.891 19.1258 232.354 19.9673C231.834 20.8088 230.984 21.8382 229.802 23.0557C228.639 24.2552 227.287 25.4368 225.747 26.6006C225.407 27.6569 225.237 28.4626 225.237 29.0176C225.237 29.7874 225.532 30.1724 226.123 30.1724C226.338 30.1724 226.696 29.9933 227.197 29.6353C227.699 29.2593 228.54 28.5521 229.722 27.5137C230.921 26.4574 231.995 25.5264 232.944 24.7207C233.643 24.112 234.448 23.2078 235.361 22.0083C236.292 20.7909 237.044 19.8778 237.617 19.269C238.942 17.8726 239.846 16.9684 240.33 16.5566C240.813 16.127 241.278 15.9121 241.726 15.9121C242.156 15.9121 242.442 16.0464 242.585 16.3149C242.747 16.5835 242.827 17.1296 242.827 17.9531C242.827 18.3291 242.791 18.6335 242.72 18.8662C242.648 19.099 242.496 19.4033 242.263 19.7793C242.048 20.1374 241.601 20.8088 240.92 21.7935C240.24 22.7782 239.434 23.9419 238.503 25.2847C238.002 26.0008 237.563 26.7886 237.188 27.6479C236.812 28.4894 236.624 29.125 236.624 29.5547C236.624 30.4857 236.991 30.9512 237.725 30.9512C238.333 30.9512 239.041 30.7005 239.846 30.1992C240.652 29.6979 241.887 28.7938 243.552 27.4868V29.2861C241.458 31.2197 239.909 32.6252 238.906 33.5024C237.904 34.3797 237.035 35.0422 236.301 35.4897C235.567 35.9373 234.869 36.1611 234.207 36.1611C232.703 36.1611 231.951 35.266 231.951 33.4756C231.951 32.7952 232.174 31.8822 232.622 30.7363C233.07 29.5726 233.795 27.8986 234.797 25.7144ZM259.478 27.5942V29.3936C257.562 31.2734 255.995 32.7326 254.778 33.771C253.578 34.8094 252.45 35.6151 251.394 36.188C250.356 36.7609 249.335 37.0474 248.333 37.0474C247.348 37.0474 246.444 36.6624 245.62 35.8926C244.797 35.1048 244.152 34.0843 243.687 32.8311C243.221 31.5599 242.988 30.2171 242.988 28.8027C242.988 27.5853 243.257 26.5021 243.794 25.5532C244.331 24.6043 245.369 23.3779 246.909 21.874C248.735 20.0837 250.427 18.7051 251.985 17.7383C253.56 16.7536 254.796 16.2612 255.691 16.2612C256.335 16.2612 256.882 16.485 257.329 16.9326C257.777 17.3802 258 17.9442 258 18.6245C258 19.1974 257.705 20.012 257.114 21.0684C256.523 22.1247 255.861 23.0467 255.127 23.8345C254.393 24.6043 253.811 24.9893 253.381 24.9893C252.916 24.9893 252.683 24.7386 252.683 24.2373C252.701 24.0941 252.71 23.9598 252.71 23.8345C252.728 23.7091 252.737 23.5838 252.737 23.4585C252.737 23.2437 252.656 23.1273 252.495 23.1094C252.352 23.0736 252.173 23.1362 251.958 23.2974C250.168 24.5506 248.941 25.4368 248.279 25.9561C247.616 26.4574 247.088 26.9676 246.694 27.4868C246.318 28.006 246.13 28.5521 246.13 29.125C246.13 30.1813 246.471 31.0407 247.151 31.7031C247.831 32.3656 248.717 32.6968 249.81 32.6968C250.938 32.6968 252.289 32.2671 253.865 31.4077C255.458 30.5304 257.329 29.2593 259.478 27.5942ZM268.796 13.6025H269.951C270.9 11.9017 271.759 10.7021 272.529 10.0039C273.299 9.28776 274.176 8.92969 275.161 8.92969C276.146 8.92969 276.638 9.15348 276.638 9.60107C276.638 9.81592 276.253 10.3978 275.483 11.3467C274.714 12.2956 274.132 13.0923 273.738 13.7368C274.347 13.8084 274.884 13.8711 275.349 13.9248C275.833 13.9785 276.208 14.0233 276.477 14.0591C275.457 15.9569 274.176 17.8994 272.637 19.8867C272.135 19.8509 271.715 19.8241 271.375 19.8062C271.034 19.7703 270.685 19.7435 270.327 19.7256C269.987 19.6898 269.566 19.654 269.065 19.6182C268.098 21.1758 267.284 22.5723 266.621 23.8076C265.977 25.0251 265.475 26.144 265.117 27.1646C264.777 28.1851 264.607 29.1519 264.607 30.0649C264.607 31.3003 265.099 31.918 266.084 31.918C266.764 31.918 267.651 31.5599 268.743 30.8438C269.853 30.1097 271.33 28.9907 273.174 27.4868V29.2861C268.34 34.5319 264.768 37.1548 262.458 37.1548C261.653 37.1548 260.999 36.8415 260.498 36.2148C260.015 35.5882 259.773 34.7826 259.773 33.7979C259.773 33.1354 259.907 32.3477 260.176 31.4346C260.462 30.5215 260.964 29.1429 261.68 27.2988C261.429 27.5137 261.187 27.7285 260.955 27.9434C260.74 28.1403 260.534 28.3283 260.337 28.5073C260.158 28.6685 259.961 28.8475 259.746 29.0444C259.531 29.2235 259.316 29.4115 259.102 29.6084V27.7554C260.981 26.1799 263.255 23.4137 265.923 19.457C265.654 19.4391 265.404 19.4302 265.171 19.4302C264.938 19.4123 264.661 19.4033 264.338 19.4033C263.282 19.4033 262.494 19.4749 261.975 19.6182C261.76 19.6719 261.554 19.7345 261.357 19.8062C261.178 19.8599 261.053 19.8867 260.981 19.8867C260.91 19.8867 260.874 19.833 260.874 19.7256C260.874 19.1348 261.241 18.2485 261.975 17.0669C262.566 16.0643 263.121 15.3213 263.64 14.8379C264.177 14.3545 264.822 14.0322 265.574 13.8711C266.344 13.6921 267.418 13.6025 268.796 13.6025ZM284.131 15.5361C283.683 15.5361 283.254 15.366 282.842 15.0259C282.448 14.6857 282.251 14.256 282.251 13.7368C282.251 12.9491 282.627 12.0718 283.379 11.105C284.131 10.1382 284.91 9.65479 285.715 9.65479C286.252 9.65479 286.7 9.82487 287.058 10.165C287.416 10.4873 287.595 10.9618 287.595 11.5884C287.595 12.3582 287.228 13.2087 286.494 14.1396C285.76 15.0706 284.972 15.5361 284.131 15.5361ZM285.957 27.5405V29.501C284.22 31.7389 282.6 33.4308 281.096 34.5767C279.592 35.7046 278.312 36.2686 277.256 36.2686C275.788 36.2686 274.696 35.4987 273.979 33.959C273.263 32.4193 272.905 30.7363 272.905 28.9102C272.905 28.2119 272.977 27.5495 273.12 26.9229C273.263 26.2783 273.433 25.7502 273.63 25.3384C273.827 24.9266 274.194 24.2821 274.731 23.4048C277.274 19.4481 279.601 17.4697 281.714 17.4697C282.806 17.4697 283.352 17.8905 283.352 18.7319C283.352 19.3049 282.994 20.2 282.278 21.4175C281.58 22.6349 280.953 23.5033 280.398 24.0225C278.84 25.5264 277.82 26.5737 277.336 27.1646C276.871 27.7554 276.638 28.4268 276.638 29.1787C276.638 29.8232 276.88 30.3604 277.363 30.79C277.847 31.2197 278.473 31.4346 279.243 31.4346C280.085 31.4346 281.007 31.1302 282.009 30.5215C283.03 29.8949 284.346 28.9012 285.957 27.5405ZM303.01 27.4868V29.2861C301.829 30.3604 300.88 31.0765 300.164 31.4346C299.447 31.7926 298.418 31.9359 297.075 31.8643C294.748 34.6214 292.698 36 290.925 36C289.923 36 289.01 35.6688 288.186 35.0063C287.362 34.3439 286.7 33.4398 286.199 32.2939C285.715 31.1481 285.474 29.868 285.474 28.4536C285.474 27.3078 285.85 26.0366 286.602 24.6401C287.371 23.2437 288.356 21.9456 289.556 20.7461C290.773 19.5286 292.071 18.5529 293.45 17.8188C294.828 17.0669 296.108 16.6909 297.29 16.6909C298.132 16.6909 298.794 16.8252 299.277 17.0938C299.761 17.3444 300.002 17.7025 300.002 18.168C300.002 18.526 299.797 18.9378 299.385 19.4033C300.065 19.5465 300.531 19.7882 300.781 20.1284C301.032 20.4507 301.157 21.0505 301.157 21.9277C301.157 22.7871 300.951 23.8703 300.54 25.1772C300.146 26.4842 299.6 27.7106 298.901 28.8564L299.385 29.3398H299.788C300.092 29.3398 300.387 29.2682 300.674 29.125C300.978 28.9639 301.247 28.8027 301.479 28.6416C301.712 28.4626 302.222 28.0776 303.01 27.4868ZM297.478 20.4238C295.992 21.319 294.721 22.1336 293.665 22.8677C292.608 23.5838 291.713 24.3179 290.979 25.0698C290.245 25.8039 289.753 26.5469 289.502 27.2988C289.054 29.304 288.831 30.3872 288.831 30.5483C288.831 31.73 289.654 32.3208 291.301 32.3208C292.071 32.3208 293.36 31.6584 295.168 30.3335C294.864 29.492 294.712 28.6864 294.712 27.9165C294.712 26.7886 294.945 25.6427 295.41 24.479C295.876 23.2974 296.565 21.9456 297.478 20.4238ZM321.084 22.6797C317.933 26.1888 316.357 28.6326 316.357 30.0112C316.357 30.7811 316.671 31.166 317.297 31.166C317.817 31.166 318.488 30.8975 319.312 30.3604C320.153 29.8053 321.46 28.8296 323.232 27.4331V29.2861C320.69 31.7926 318.739 33.6009 317.378 34.7109C316.017 35.821 314.907 36.376 314.048 36.376C312.58 36.376 311.846 35.4092 311.846 33.4756C311.846 32.9027 311.935 32.3387 312.114 31.7837C312.293 31.2287 312.535 30.6558 312.839 30.0649C313.162 29.4562 313.645 28.5968 314.29 27.4868C314.934 26.3589 315.677 25.0877 316.519 23.6733C315.498 24.1925 314.218 25.222 312.678 26.7617C311.676 27.7285 310.825 28.6506 310.127 29.5278C309.429 30.3872 308.677 31.354 307.871 32.4282C307.083 33.4845 306.501 34.2007 306.125 34.5767C305.767 34.9347 305.4 35.1138 305.024 35.1138C304.451 35.1138 303.923 34.514 303.44 33.3145C302.957 32.1149 302.715 30.7184 302.715 29.125C302.715 28.1403 302.822 27.3704 303.037 26.8154C303.27 26.2604 303.717 25.4727 304.38 24.4521C305.615 22.5544 306.681 21.1668 307.576 20.2896C308.471 19.3944 309.33 18.9468 310.154 18.9468C310.727 18.9468 311.183 19.0452 311.523 19.2422C311.882 19.4391 312.061 19.7435 312.061 20.1553C312.061 20.3343 312.007 20.5223 311.899 20.7192C311.792 20.9162 311.667 21.0952 311.523 21.2563C311.398 21.4175 311.121 21.7308 310.691 22.1963C307.862 25.3294 306.448 27.3615 306.448 28.2925C306.448 28.8117 306.618 29.0713 306.958 29.0713C307.173 29.0713 307.585 28.7311 308.193 28.0508C308.82 27.3525 309.617 26.4484 310.583 25.3384C311.568 24.2104 312.723 23.0378 314.048 21.8203C315.391 20.6029 316.912 19.4302 318.613 18.3022C319.562 17.6398 320.35 17.3086 320.977 17.3086C321.263 17.3086 321.541 17.7025 321.809 18.4902C322.096 19.278 322.239 20.0747 322.239 20.8804C322.239 21.2743 321.854 21.874 321.084 22.6797ZM372.002 27.4331V29.1787C368.994 32.5267 366.228 35.2839 363.704 37.4502C361.197 39.6344 358.744 41.3084 356.345 42.4722C353.946 43.6538 351.628 44.2446 349.39 44.2446C347.456 44.2446 345.791 43.8597 344.395 43.0898C343.016 42.32 341.969 41.1921 341.252 39.7061C340.554 38.238 340.205 36.4924 340.205 34.4692C340.205 32.8758 340.456 31.1929 340.957 29.4204C341.476 27.63 342.219 25.8307 343.186 24.0225C344.153 22.1963 345.334 20.3164 346.731 18.3828C348.145 16.4492 349.801 14.4172 351.699 12.2866C353.669 10.0845 355.611 8.18669 357.527 6.59326C359.443 4.98193 361.179 3.71973 362.737 2.80664C364.294 1.89355 365.736 1.21322 367.061 0.765625C368.403 0.318034 369.513 0.0942383 370.391 0.0942383C371.286 0.0942383 372.047 0.309082 372.673 0.73877C373.3 1.16846 373.783 1.79508 374.124 2.61865C374.464 3.44222 374.634 4.39111 374.634 5.46533C374.634 7.48844 373.944 9.7443 372.566 12.2329C371.187 14.7036 369.469 17.0938 367.41 19.4033C365.351 21.7129 363.381 23.6017 361.501 25.0698C359.639 26.52 358.297 27.2451 357.473 27.2451C356.918 27.2451 356.399 27.0303 355.916 26.6006C355.45 26.153 355.217 25.6517 355.217 25.0967C355.217 24.0762 355.754 22.8408 356.829 21.3906C357.921 19.9404 359.102 18.6156 360.374 17.416C361.663 16.1986 362.432 15.5898 362.683 15.5898C362.808 15.5898 362.871 15.6436 362.871 15.751C362.871 15.9121 362.773 16.1896 362.576 16.5835C362.397 16.9774 362.307 17.2191 362.307 17.3086C362.307 17.4518 362.361 17.5234 362.468 17.5234C362.773 17.5234 363.65 16.7088 365.1 15.0796C366.55 13.4504 367.875 11.66 369.075 9.7085C370.292 7.7391 370.901 6.12777 370.901 4.87451C370.901 4.35531 370.785 3.96143 370.552 3.69287C370.337 3.40641 370.006 3.26318 369.558 3.26318C368.305 3.26318 366.398 4.28369 363.838 6.32471C361.296 8.34782 358.682 10.9349 355.996 14.0859C353.328 17.2191 351.099 20.4596 349.309 23.8076C347.519 27.1556 346.624 30.1007 346.624 32.6431C346.624 34.1112 346.838 35.3376 347.268 36.3223C347.716 37.307 348.36 38.0679 349.202 38.605C350.061 39.1421 351.09 39.4106 352.29 39.4106C354.886 39.4106 357.831 38.3991 361.125 36.376C364.42 34.3529 368.045 31.3719 372.002 27.4331ZM389.055 27.4868V29.2861C387.874 30.3604 386.925 31.0765 386.208 31.4346C385.492 31.7926 384.463 31.9359 383.12 31.8643C380.793 34.6214 378.743 36 376.97 36C375.968 36 375.055 35.6688 374.231 35.0063C373.407 34.3439 372.745 33.4398 372.244 32.2939C371.76 31.1481 371.519 29.868 371.519 28.4536C371.519 27.3078 371.895 26.0366 372.646 24.6401C373.416 23.2437 374.401 21.9456 375.601 20.7461C376.818 19.5286 378.116 18.5529 379.495 17.8188C380.873 17.0669 382.153 16.6909 383.335 16.6909C384.176 16.6909 384.839 16.8252 385.322 17.0938C385.806 17.3444 386.047 17.7025 386.047 18.168C386.047 18.526 385.841 18.9378 385.43 19.4033C386.11 19.5465 386.576 19.7882 386.826 20.1284C387.077 20.4507 387.202 21.0505 387.202 21.9277C387.202 22.7871 386.996 23.8703 386.584 25.1772C386.191 26.4842 385.645 27.7106 384.946 28.8564L385.43 29.3398H385.833C386.137 29.3398 386.432 29.2682 386.719 29.125C387.023 28.9639 387.292 28.8027 387.524 28.6416C387.757 28.4626 388.267 28.0776 389.055 27.4868ZM383.523 20.4238C382.037 21.319 380.766 22.1336 379.709 22.8677C378.653 23.5838 377.758 24.3179 377.024 25.0698C376.29 25.8039 375.798 26.5469 375.547 27.2988C375.099 29.304 374.875 30.3872 374.875 30.5483C374.875 31.73 375.699 32.3208 377.346 32.3208C378.116 32.3208 379.405 31.6584 381.213 30.3335C380.909 29.492 380.757 28.6864 380.757 27.9165C380.757 26.7886 380.99 25.6427 381.455 24.479C381.921 23.2974 382.61 21.9456 383.523 20.4238ZM392.842 36.1074C392.537 36.1074 392.278 35.991 392.063 35.7583C391.848 35.5256 391.741 35.2033 391.741 34.7915C391.741 34.4692 391.929 33.8963 392.305 33.0728C392.699 32.2313 393.182 31.4883 393.755 30.8438C394.346 30.1813 394.954 29.8501 395.581 29.8501C396.351 29.8501 396.736 30.3066 396.736 31.2197C396.736 31.721 396.53 32.3745 396.118 33.1802C395.706 33.9679 395.196 34.6572 394.587 35.248C393.979 35.821 393.397 36.1074 392.842 36.1074Z"
            fill="black"
          />
        </svg>
      </div>
      <ul className={`nav-items`}>
        <li className="underline">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="underline">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="underline">
          <Link to="/services">Services</Link>
        </li>
        <li className="underline">
          <Link to="/csr">CSR</Link>
        </li>
        <li className="underline">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <div className="burger">

     {!showNav?<i class="fas fa-bars" onClick={handleNav}></i>: <i class="fas fa-xmark" onClick={handleNav}></i>}
     
      </div>
    </div>
  );
}

export default Navbar;
