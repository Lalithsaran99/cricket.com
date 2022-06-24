import { DateTime } from "luxon";
export const ScheduleCard = ({ data }) => {
  return (
    <>
      {data?.map((data, index) => {
        return (
          <div key={index}>
            <div className="p-3">
              <div className="divider"></div>
              <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-100 flex justify-between items-center ">
                <div className="w-20 ml1 w-10-l ">
                  <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-white bg-red-700 uppercase last:mr-0 mr-1">
                    {data?.league === "International"
                      ? "INT"
                      : data?.league === "Domestic"
                      ? "DOM"
                      : null}
                  </div>
                </div>
                <div className="w-80 w-90-l f5-l fw6 font-bold text-white fw6-l f8 ml3 ml4-l">
                  {data?.seriesName}
                </div>
                <div className="w-10 w-20-l tr flex items-end justify-end">
                  <span className="f4 text-white mh1-l"> ❯ </span>
                </div>
              </div>
              <div className="divider"></div>
            </div>
            {data?.matches?.map((data1, index) => {
              return (
                <div
                  id="animation-carousel"
                  key={index}
                  class="relative"
                  data-carousel="static"
                >
                  <div className="p-3" data-carousel-item>
                    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-100">
                      <div className=" flex items-center justify-start f7 black-50 fw5 truncate w-90 ml1">
                        <div className="h1 w15 pa1 f10 fw5 white flex items-center  justify-center  br2 bg-silver"></div>
                        &nbsp;
                        <div className="flex ml2 black">
                          {index + 1 === 1 || index >= 4
                            ? index + 1 + "th"
                            : index + 1 === 2
                            ? index + 1 + "nd"
                            : index + 1 === 3
                            ? index + 1 + "rd"
                            : null}{" "}
                          {data?.matchType}{" "}
                        </div>
                      </div>
                      <br></br>
                      <div className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-stone-800 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          {data1?.homeTeamName}
                        </span>
                        <span className="text-center px-2 py-0.5 ml-3 text-xs font-medium text-green-500 bg-green-200 rounded dark:bg-green-700 dark:text-green-400">
                          {data?.matchType}
                        </span>
                        <span className="flex-1 ml-20 whitespace-nowrap">
                          {data1?.awayTeamName}
                        </span>
                      </div>
                      <br></br>
                      <div className="p-3 text-center text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-stone-800 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <p className="text-center"> {data1?.matchdate}</p>
                      </div>
                      <br></br>
                      {data1?.teamsWinProbability?.homeTeamShortName ? (
                        <>
                          <p class="text-base font-medium text-blue-700 dark:text-white">
                            WIN PERCENTAGE
                          </p>
                          <br></br>
                          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                              class="bg-green-600 h-2.5 rounded-full"
                              style={{
                                width:
                                  data1?.teamsWinProbability
                                    ?.homeTeamPercentage >
                                  data1?.teamsWinProbability?.awayTeamPercentage
                                    ? data1?.teamsWinProbability
                                        ?.homeTeamPercentage + "%"
                                    : data1?.teamsWinProbability
                                        ?.awayTeamPercentage + "%",
                              }}
                            ></div>
                          </div>
                          <br></br>

                          <div class="flex justify-between mb-1">
                            <span class="text-base font-medium text-blue-700 dark:text-white">
                              {data1?.teamsWinProbability?.homeTeamShortName +
                                "(" +
                                data1?.teamsWinProbability?.homeTeamPercentage +
                                "%" +
                                ")"}
                            </span>
                            <span class="text-sm font-medium text-blue-700 dark:text-white">
                              {data1?.teamsWinProbability?.awayTeamShortName +
                                "(" +
                                data1?.teamsWinProbability?.awayTeamPercentage +
                                "%" +
                                ")"}
                            </span>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                  <button
                    type="button"
                    class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev
                  >
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7"
                        ></path>
                      </svg>
                      <span class="hidden">Previous</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next
                  >
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                      <span class="hidden">Next</span>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
