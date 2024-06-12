export default function About() {
  return (
    <section id="About" className="bg-[white] px-0 py-[3.125rem] lt:py-[6.25rem]">
      <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="max-w-[75rem] mx-auto my-0">
        <div className="flex-col md:flex-row md:items-start lt:flex-row  flex justify-center lt:justify-between items-center gap-[1.875rem] px-[1.25rem] lt:px-0 py-[3.125rem] lt:py-[6.25rem]">
          <div className="w-full lt:w-[23.12375rem] h-full lt:h-[30.5525rem] cursor-pointer rounded-[0.625rem] shine-overlay">
            <div
              className="w-full lt:w-[23.12375rem] h-[30.5525rem] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.13)] "
              style={{
                background: 'url(/assets/images/avatar.png) 50%/cover no-repeat',
              }}
            ></div>
            <div className="shine bg-white hidden absolute w-full h-full pointer-events-none z-[3] opacity-0 skew-x-[30deg] animate-[shine_0.75s_linear_1] left-0 top-0"></div>
          </div>
          <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" className=" w-full lt:w-[50rem] h-full lt:h-[30.5525rem]">
            <span className="flex w-full lt:w-[6.26563rem] h-[1.625rem] flex-col justify-center shrink-0 text-[#8c89a2] text-[1.125rem] not-italic font-semibold leading-9 tracking-[0.0625rem] uppercase">
              About Me
            </span>
            <h3 className=" flex w-full lt:w-[23.4375rem] flex-col justify-center shrink-0 text-label text-[2rem] lt:text-[2.5rem] not-italic font-normal leading-[3rem] mt-2 ">Truong Van Chu Toan</h3>
            <p className="flex w-full lt:w-[46.875rem] flex-col justify-center text-[#37352f] text-[1.125rem] not-italic font-normal leading-[1.625rem] mt-[0.8rem]">
              Seeking a full-time position in web development to quickly adapt and contribute effectively to a dynamic company. Committed to continuous learning and becoming a Fullstack Web Developer
              within the next two years
            </p>
            <div className=" mt-[1rem]   shrink-0 border-t-[#DDD] border-t border-solid">
              <div className="grid mt-[2rem] lt:grid-cols-[repeat(2,1fr)]">
                <div className="inline-flex h-[1.8rem] items-start gap-[0.905rem] shrink-0 pt-0 pb-[0.05rem]">
                  <div className="flex h-7 flex-col justify-center">
                    <span className="y text-label text-[1.2rem] not-italic font-semibold leading-[1.8rem]">Name:</span>
                  </div>
                  <div className="flex h-7 flex-col justify-center">
                    <span className="text-description text-[1.2rem] not-italic font-normal">Truong Van Chu Toan</span>
                  </div>
                </div>
                <div className="inline-flex h-[1.8rem] items-start gap-[0.90625rem] shrink-0  pt-0 pb-[0.05rem]">
                  <div className="flex  h-7 flex-col justify-center">
                    <span className="y text-label text-[1.2rem] not-italic font-semibold leading-[1.8rem]">Age:</span>
                  </div>
                  <div className="flex  h-7 flex-col justify-center">
                    <span className="text-description text-[1.2rem] not-italic font-normal">24 Years</span>
                  </div>
                </div>
              </div>
              <div className="grid mt-[0.313rem] lt:grid-cols-[repeat(2,1fr)]">
                <div className="inline-flex h-[1.8rem] items-start gap-[0.905rem] shrink-0 pt-0 pb-[0.05rem]">
                  <div className="flex h-7 flex-col justify-center">
                    <span className="y text-label text-[1.2rem] not-italic font-semibold leading-[1.8rem]">Phone:</span>
                  </div>
                  <div className="flex h-7 flex-col justify-center">
                    <span className="text-description text-[1.2rem] not-italic font-normal">+84 972 712 621</span>
                  </div>
                </div>
                <div className="inline-flex h-[1.8rem] items-start gap-[0.90625rem] shrink-0  pt-0 pb-[0.05rem]">
                  <div className="flex  h-7 flex-col justify-center">
                    <span className="y text-label text-[1.2rem] not-italic font-semibold leading-[1.8rem]">Location:</span>
                  </div>
                  <div className="flex  h-7 flex-col justify-center">
                    <span className="text-description text-[1.2rem] not-italic font-normal">Tp. Ho Chi Minh</span>
                  </div>
                </div>
              </div>

              <div className="grid mt-[0.313rem] lt:grid-cols-[repeat(2,1fr)]">
                <div className=" inline-flex h-[1.8rem] items-start gap-[0.8975rem] shrink-0">
                  <div className="flex h-7 flex-col justify-center">
                    <span className="y text-label text-[1.2rem] not-italic font-semibold leading-[1.8rem]">Email:</span>
                  </div>
                  <div className="flex h-7 flex-col justify-center">
                    <span className="text-primary text-[1.2rem] not-italic font-normal">truongvanchutoan1999@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-9 sm:mt-6 lt:mt-12 flex flex-col lt:flex-row gap-[1.13rem] lt:gap-[3.13rem] items-center">
              <button className="order-1 w-full lt:w-[17.32438rem] h-[3.375rem] shrink-0 border rounded-[0.625rem] border-solid border-primary hover:opacity-50 hover:transition-[0.3s] hover:cursor-pointer bg-primary">
                <a className="flex gap-[0.313rem] justify-center items-center" href="./assets/files/CV_TruongVanChuToan_FrontEnd.pdf" target="_blank" download>
                  <svg className="w-[1.20625rem] h-[1.125rem] shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                    <g clipPath="url(#clip0_1_465)">
                      <path
                        d="M13.3542 9.32145C13.3542 9.2277 13.3241 9.15069 13.2638 9.09042C13.2035 9.03015 13.1265 9.00002 13.0328 9.00002H10.7828V5.4643C10.7828 5.37725 10.751 5.30192 10.6874 5.2383C10.6237 5.17468 10.5484 5.14287 10.4614 5.14287H8.53278C8.44573 5.14287 8.3704 5.17468 8.30678 5.2383C8.24316 5.30192 8.21136 5.37725 8.21136 5.4643V9.00002H5.96136C5.8743 9.00002 5.79897 9.03183 5.73535 9.09544C5.67174 9.15906 5.63993 9.23439 5.63993 9.32145C5.63993 9.4152 5.67006 9.49221 5.73033 9.55247L9.26604 13.0882C9.32631 13.1485 9.40332 13.1786 9.49707 13.1786C9.59082 13.1786 9.66783 13.1485 9.7281 13.0882L13.2538 9.56252C13.3207 9.48216 13.3542 9.4018 13.3542 9.32145ZM19.7828 11.5714C19.7828 12.6362 19.4061 13.5452 18.6528 14.2986C17.8994 15.0519 16.9904 15.4286 15.9256 15.4286H4.99707C3.75823 15.4286 2.69852 14.9883 1.81794 14.1077C0.937361 13.2271 0.49707 12.1674 0.49707 10.9286C0.49707 10.0581 0.731445 9.25448 1.2002 8.51787C1.66895 7.78127 2.29841 7.22881 3.08859 6.86051C3.0752 6.65962 3.0685 6.51564 3.0685 6.42859C3.0685 5.00895 3.57073 3.79689 4.5752 2.79243C5.57966 1.78796 6.79171 1.28573 8.21136 1.28573C9.256 1.28573 10.2119 1.57703 11.0791 2.15962C11.9463 2.7422 12.5774 3.51564 12.9725 4.47993C13.448 4.06475 14.0038 3.85716 14.6399 3.85716C15.3497 3.85716 15.9558 4.10828 16.458 4.61051C16.9602 5.11274 17.2114 5.71877 17.2114 6.42859C17.2114 6.93752 17.0741 7.39957 16.7995 7.81475C17.6701 8.02234 18.3849 8.47602 18.9441 9.1758C19.5032 9.87558 19.7828 10.6741 19.7828 11.5714Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_465">
                        <rect width="19.3" height="18" fill="white" transform="matrix(1 0 0 -1 0.48999 18)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-white text-center text-[1.125rem] not-italic font-bold leading-7 capitalize">Download My Resume</span>
                </a>
              </button>
              <div className="lt:order-1 flex h-[2rem] gap-[1.75rem] items-center justify-center lt:justify-start w-full">
                <span className="w-[3.75rem] bg-primary h-[0.125rem]"></span>
                <div className="flex gap-[1.6rem] items-center ">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={23} viewBox="0 0 20 23" fill="none">
                      <g clipPath="url(#clip0_290_102)">
                        <path
                          d="M13.2229 19.0052C12.8792 17.0327 12.3063 14.9947 11.5042 12.8913H11.4796L11.4551 12.9036C11.3241 12.9527 11.1481 13.0202 10.9272 13.1062C10.7062 13.1921 10.2929 13.3926 9.6872 13.7077C9.08155 14.0228 8.52091 14.3584 8.00528 14.7144C7.48966 15.0705 6.95357 15.539 6.39703 16.1201C5.84048 16.7012 5.41897 17.3069 5.13252 17.9371L4.94836 17.802C6.45432 19.0297 8.16488 19.6436 10.0801 19.6436C11.1604 19.6436 12.208 19.4308 13.2229 19.0052ZM10.9517 11.5532C10.7798 11.1521 10.5629 10.6979 10.301 10.1904C7.75566 10.9516 5.00156 11.3322 2.03877 11.3322C2.03058 11.3895 2.02649 11.4754 2.02649 11.59C2.02649 12.6049 2.20655 13.5727 2.56667 14.4934C2.92679 15.4142 3.43423 16.2388 4.08899 16.9672C4.49822 16.2388 5.00361 15.5574 5.60517 14.9231C6.20674 14.2888 6.78988 13.7793 7.35461 13.3947C7.91935 13.01 8.45339 12.6785 8.95674 12.4003C9.46008 12.122 9.86726 11.9255 10.1783 11.811L10.6325 11.6514C10.6653 11.6432 10.7185 11.6289 10.7921 11.6084C10.8658 11.5879 10.919 11.5695 10.9517 11.5532ZM9.6381 8.95047C8.65595 7.20717 7.65744 5.66029 6.64256 4.30985C5.5131 4.84184 4.55551 5.603 3.76979 6.59333C2.98408 7.58366 2.46027 8.69675 2.19836 9.93262C4.67009 9.93262 7.15 9.60524 9.6381 8.95047ZM18.0354 12.8668C16.3167 12.3757 14.6429 12.257 13.0142 12.5107C13.7263 14.4668 14.2501 16.3861 14.5856 18.2686C15.4941 17.6547 16.2512 16.8792 16.8568 15.9421C17.4625 15.005 17.8554 13.9799 18.0354 12.8668ZM15.3959 5.5498C13.8818 4.20754 12.1098 3.53641 10.0801 3.53641C9.45804 3.53641 8.82374 3.61416 8.17716 3.76967C9.24933 5.16104 10.256 6.72428 11.1972 8.4594C11.762 8.2466 12.294 7.99902 12.7932 7.71666C13.2925 7.43429 13.6874 7.18262 13.9779 6.96163C14.2685 6.74065 14.5365 6.50739 14.7821 6.26186C15.0276 6.01632 15.1811 5.85058 15.2424 5.76465C15.3038 5.67871 15.355 5.6071 15.3959 5.5498ZM18.1336 11.504C18.1091 9.60524 17.4993 7.92741 16.3044 6.47056L16.2921 6.48284C16.2185 6.58105 16.1407 6.68131 16.0589 6.78362C15.977 6.88593 15.799 7.06803 15.5248 7.32994C15.2506 7.59184 14.9601 7.83942 14.6532 8.07268C14.3462 8.30594 13.937 8.57194 13.4255 8.87067C12.914 9.16941 12.3758 9.43336 11.8111 9.66253C12.0157 10.0963 12.1958 10.4851 12.3513 10.8288C12.3676 10.8697 12.3942 10.9393 12.4311 11.0375C12.4679 11.1357 12.4986 11.2053 12.5231 11.2462C12.8178 11.2053 13.1227 11.1767 13.4378 11.1603C13.7529 11.1439 14.0536 11.1357 14.3401 11.1357C14.6266 11.1357 14.9089 11.1419 15.1872 11.1542C15.4655 11.1664 15.7274 11.1828 15.9729 11.2033C16.2185 11.2237 16.4497 11.2462 16.6666 11.2708C16.8834 11.2953 17.0799 11.3219 17.2558 11.3506C17.4318 11.3792 17.5812 11.4038 17.7039 11.4242C17.8267 11.4447 17.929 11.4631 18.0109 11.4795L18.1336 11.504ZM18.2441 6.85728C18.2441 6.85728 18.4549 7.21842 18.8764 7.94071C19.2979 8.66299 19.5086 9.87942 19.5086 11.59C19.5086 13.3005 19.0871 14.8781 18.2441 16.3227C17.4011 17.7673 16.2573 18.911 14.8128 19.754C13.3682 20.5971 11.7906 21.0186 10.0801 21.0186C8.3695 21.0186 6.79193 20.5971 5.34736 19.754C3.90279 18.911 2.759 17.7673 1.916 16.3227C1.07299 14.8781 0.651489 13.3005 0.651489 11.59C0.651489 9.87942 1.07299 8.30185 1.916 6.85728C2.759 5.41271 3.90279 4.26893 5.34736 3.42592C6.79193 2.58291 8.3695 2.16141 10.0801 2.16141C11.7906 2.16141 13.3682 2.58291 14.8128 3.42592C16.2573 4.26893 17.4011 5.41271 18.2441 6.85728Z"
                          fill="#7d11f9"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_290_102">
                          <rect width="18.86" height={22} fill="white" transform="matrix(1 0 0 -1 0.650024 22.59)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={23} viewBox="0 0 20 23" fill="none">
                      <g clipPath="url(#clip0_290_104)">
                        <path
                          d="M12.1121 13.8121C12.1121 13.8121 12.2656 13.6586 12.5725 13.3517C12.8794 13.0448 13.0329 12.4575 13.0329 11.59C13.0329 10.7224 12.7259 9.98172 12.1121 9.36788C11.4983 8.75405 10.7576 8.44713 9.89 8.44713C9.02244 8.44713 8.28174 8.75405 7.6679 9.36788C7.05406 9.98172 6.74714 10.7224 6.74714 11.59C6.74714 12.4575 7.05406 13.1982 7.6679 13.8121C8.28174 14.4259 9.02244 14.7328 9.89 14.7328C10.7576 14.7328 11.4983 14.4259 12.1121 13.8121ZM13.3152 8.16476C13.3152 8.16476 13.5505 8.40006 14.0211 8.87067C14.4917 9.34128 14.7271 10.2477 14.7271 11.59C14.7271 12.9322 14.2564 14.074 13.3152 15.0152C12.374 15.9564 11.2323 16.427 9.89 16.427C8.54774 16.427 7.40599 15.9564 6.46477 15.0152C5.52355 14.074 5.05294 12.9322 5.05294 11.59C5.05294 10.2477 5.52355 9.10598 6.46477 8.16476C7.40599 7.22354 8.54774 6.75293 9.89 6.75293C11.2323 6.75293 12.374 7.22354 13.3152 8.16476ZM15.7215 5.75851C15.7215 5.75851 15.7767 5.81376 15.8872 5.92425C15.9977 6.03474 16.0529 6.24549 16.0529 6.5565C16.0529 6.86751 15.9425 7.13351 15.7215 7.35449C15.5005 7.57547 15.2345 7.68596 14.9235 7.68596C14.6125 7.68596 14.3465 7.57547 14.1255 7.35449C13.9045 7.13351 13.794 6.86751 13.794 6.5565C13.794 6.24549 13.9045 5.97949 14.1255 5.75851C14.3465 5.53753 14.6125 5.42704 14.9235 5.42704C15.2345 5.42704 15.5005 5.53753 15.7215 5.75851ZM10.8292 3.84947C10.8292 3.84947 10.687 3.85049 10.4026 3.85254C10.1181 3.85458 9.94729 3.85561 9.89 3.85561C9.83271 3.85561 9.51965 3.85356 8.95082 3.84947C8.382 3.84538 7.95027 3.84538 7.65562 3.84947C7.36098 3.85356 6.96608 3.86584 6.47091 3.8863C5.97575 3.90676 5.55425 3.94768 5.2064 4.00907C4.85856 4.07045 4.56596 4.14616 4.32861 4.23619C3.91939 4.39988 3.55927 4.63723 3.24826 4.94824C2.93724 5.25925 2.69989 5.61937 2.5362 6.0286C2.44617 6.26595 2.37047 6.55855 2.30908 6.90639C2.2477 7.25423 2.20678 7.67573 2.18631 8.1709C2.16585 8.66606 2.15358 9.06096 2.14948 9.35561C2.14539 9.65025 2.14539 10.082 2.14948 10.6508C2.15358 11.2196 2.15562 11.5327 2.15562 11.59C2.15562 11.6473 2.15358 11.9603 2.14948 12.5292C2.14539 13.098 2.14539 13.5297 2.14948 13.8244C2.15358 14.119 2.16585 14.5139 2.18631 15.0091C2.20678 15.5042 2.2477 15.9257 2.30908 16.2736C2.37047 16.6214 2.44617 16.914 2.5362 17.1514C2.69989 17.5606 2.93724 17.9207 3.24826 18.2317C3.55927 18.5427 3.91939 18.7801 4.32861 18.9438C4.56596 19.0338 4.85856 19.1095 5.2064 19.1709C5.55425 19.2323 5.97575 19.2732 6.47091 19.2937C6.96608 19.3141 7.36098 19.3264 7.65562 19.3305C7.95027 19.3346 8.382 19.3346 8.95082 19.3305C9.51965 19.3264 9.83271 19.3244 9.89 19.3244C9.94729 19.3244 10.2603 19.3264 10.8292 19.3305C11.398 19.3346 11.8297 19.3346 12.1244 19.3305C12.419 19.3264 12.8139 19.3141 13.3091 19.2937C13.8042 19.2732 14.2257 19.2323 14.5736 19.1709C14.9214 19.1095 15.214 19.0338 15.4514 18.9438C15.8606 18.7801 16.2207 18.5427 16.5317 18.2317C16.8428 17.9207 17.0801 17.5606 17.2438 17.1514C17.3338 16.914 17.4095 16.6214 17.4709 16.2736C17.5323 15.9257 17.5732 15.5042 17.5937 15.0091C17.6141 14.5139 17.6264 14.119 17.6305 13.8244C17.6346 13.5297 17.6346 13.098 17.6305 12.5292C17.6264 11.9603 17.6244 11.6473 17.6244 11.59C17.6244 11.5327 17.6264 11.2196 17.6305 10.6508C17.6346 10.082 17.6346 9.65025 17.6305 9.35561C17.6264 9.06096 17.6141 8.66606 17.5937 8.1709C17.5732 7.67573 17.5323 7.25423 17.4709 6.90639C17.4095 6.55855 17.3338 6.26595 17.2438 6.0286C17.0801 5.61937 16.8428 5.25925 16.5317 4.94824C16.2207 4.63723 15.8606 4.39988 15.4514 4.23619C15.214 4.14616 14.9214 4.07045 14.5736 4.00907C14.2257 3.94768 13.8042 3.90676 13.3091 3.8863C12.8139 3.86584 12.419 3.85356 12.1244 3.84947C11.8297 3.84538 11.398 3.84538 10.8292 3.84947ZM19.2572 7.69824C19.2981 8.41848 19.3186 9.71573 19.3186 11.59C19.3186 13.4642 19.2981 14.7615 19.2572 15.4817C19.1753 17.1841 18.6679 18.5018 17.7349 19.4348C16.8018 20.3679 15.4841 20.8753 13.7817 20.9572C13.0615 20.9981 11.7643 21.0186 9.89 21.0186C8.01574 21.0186 6.71849 20.9981 5.99826 20.9572C4.29588 20.8753 2.97817 20.3679 2.04513 19.4348C1.1121 18.5018 0.604655 17.1841 0.52281 15.4817C0.481887 14.7615 0.461426 13.4642 0.461426 11.59C0.461426 9.71573 0.481887 8.41848 0.52281 7.69824C0.604655 5.99586 1.1121 4.67815 2.04513 3.74512C2.97817 2.81208 4.29588 2.30464 5.99826 2.2228C6.71849 2.18187 8.01574 2.16141 9.89 2.16141C11.7643 2.16141 13.0615 2.18187 13.7817 2.2228C15.4841 2.30464 16.8018 2.81208 17.7349 3.74512C18.6679 4.67815 19.1753 5.99586 19.2572 7.69824Z"
                          fill="#7d11f9"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_290_104">
                          <rect width="18.86" height={22} fill="white" transform="matrix(1 0 0 -1 0.459961 22.59)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100068599721013">
                    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={23} viewBox="0 0 13 23" fill="none">
                      <g clipPath="url(#clip0_290_106)">
                        <path
                          d="M11.0315 0.737305V3.97838H9.104C8.40013 3.97838 7.92543 4.1257 7.6799 4.42034C7.43436 4.71498 7.31159 5.15695 7.31159 5.74623V8.06655H10.9087L10.4299 11.7005H7.31159V21.0186H3.5549V11.7005H0.424316V8.06655H3.5549V5.39021C3.5549 3.86789 3.98049 2.68727 4.83168 1.84835C5.68287 1.00944 6.81643 0.589983 8.23235 0.589983C9.43548 0.589983 10.3685 0.639091 11.0315 0.737305Z"
                          fill="#7d11f9"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_290_106">
                          <rect width="12.58" height={22} fill="white" transform="matrix(1 0 0 -1 0.420044 22.59)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={19} height={23} viewBox="0 0 19 23" fill="none">
                      <g clipPath="url(#clip0_290_108)">
                        <path
                          d="M4.37615 8.26291V20.4292H0.324812V8.26291H4.37615ZM4.63396 4.50621C4.64215 5.10368 4.43549 5.60293 4.01399 6.00398C3.59248 6.40502 3.03798 6.60554 2.35048 6.60554H2.32593C1.6548 6.60554 1.11462 6.40502 0.705392 6.00398C0.296166 5.60293 0.0915527 5.10368 0.0915527 4.50621C0.0915527 3.90055 0.302304 3.39925 0.723807 3.0023C1.14531 2.60535 1.69572 2.40688 2.37504 2.40688C3.05435 2.40688 3.59862 2.60535 4.00785 3.0023C4.41707 3.39925 4.62578 3.90055 4.63396 4.50621ZM18.9487 13.456V20.4292H14.9096V13.9225C14.9096 13.0631 14.7439 12.39 14.4124 11.903C14.081 11.416 13.5633 11.1725 12.8594 11.1725C12.3438 11.1725 11.9121 11.3137 11.5642 11.5961C11.2164 11.8784 10.9565 12.2283 10.7846 12.6457C10.6946 12.8913 10.6496 13.2227 10.6496 13.6401V20.4292H6.61053C6.6269 17.1636 6.63508 14.5159 6.63508 12.4861C6.63508 10.4564 6.63099 9.24505 6.6228 8.85219L6.61053 8.26291H10.6496V10.0308H10.625C10.7887 9.76886 10.9565 9.53969 11.1284 9.34326C11.3003 9.14683 11.5315 8.93404 11.822 8.70487C12.1126 8.4757 12.4686 8.29769 12.8901 8.17083C13.3116 8.04397 13.7802 7.98054 14.2958 7.98054C15.6953 7.98054 16.8207 8.44501 17.6719 9.37395C18.5231 10.3029 18.9487 11.6636 18.9487 13.456Z"
                          fill="#7d11f9"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_290_108">
                          <rect width="18.86" height={22} fill="white" transform="matrix(1 0 0 -1 0.0900879 22.59)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
