import { useEffect, useState } from "react";
import { Status, Type } from "./enum";
import { useQuery } from "@apollo/client/react";
import { ScheduleCard } from "./schedule-card";
import { schedule } from "./query";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../loader";

export const NavBar = () => {
  const [status, setStatus] = useState("upcoming");
  const [type, setType] = useState("all");
  const { data, fetchMore } = useQuery(schedule, {
    variables: {
      status,
      type,
    },
  });
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);

  const loadMoreSchedules = () => {
    setFetchMoreLoading(true);
    fetchMore({
      variables: {
        status,
        type,
        page: data?.newSchedule?.length,
      },
      updateQuery: fetchMoreSchedulesResolver,
    }).then(() => setFetchMoreLoading(false));
  };

  const fetchMoreSchedulesResolver = (prev, { fetchMoreResult }) => {
    if (!fetchMoreResult) {
      return prev;
    }
    return Object.assign({}, prev, {
      bewSchedule: [...prev?.newSchedule, ...fetchMoreResult?.newSchedule],
    });
  };

  console.log(data?.newSchedule);
  useEffect(() => {
    setStatus(Status.upcoming);
    setType(Type.all);
  }, []);
  console.log(status, type);
  return (
    <>
      <h1 className="f35 text-white font-bold p-5"> Schedule</h1>
      <div className="flex items-center justify-between ">
        <div
          className={
            status === "upcoming"
              ? "flex justify-center items-center oswald inline-block p-4 rounded-t-lg border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 active  white-50   pa2 pointer tc flex-auto f7 fw6 ph3   tc"
              : "flex justify-center items-center oswald inline-block p-4 rounded-t-lg border-b-2 border-transparent white-50   pa2 pointer tc flex-auto f7 fw6 ph3   tc"
          }
          onClick={(e) => {
            e.preventDefault();
            setStatus(Status.upcoming);
          }}
        >
          <div className="text-sky-400"> Upcoming</div>
        </div>
        <div
          className={
            status === "live"
              ? "flex justify-center items-center oswald inline-block p-4 rounded-t-lg border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 active  white-50   pa2 pointer tc flex-auto f7 fw6 ph3   tc"
              : "flex justify-center items-center oswald inline-block p-4 rounded-t-lg border-b-2 border-transparent white-50   pa2 pointer tc flex-auto f7 fw6 ph3   tc"
          }
          onClick={(e) => {
            e.preventDefault();
            setStatus(Status.live);
          }}
        >
          <div className="text-sky-400"> Live</div>
        </div>
        <div
          className={
            status === "completed"
              ? "flex justify-center items-center oswald inline-block p-4 rounded-t-lg border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 active  white-50   pa2 pointer tc flex-auto f7 fw6 ph3   tc"
              : "flex justify-center items-center oswald inline-block p-4 rounded-t-lg border-b-2 border-transparent white-50   pa2 pointer tc flex-auto f7 fw6 ph3   tc"
          }
          onClick={(e) => {
            e.preventDefault();
            setStatus(Status.completed);
          }}
        >
          <div className="text-sky-400"> Results</div>
        </div>
      </div>
      <div className="pt-3">
        <div className="flex items-center justify-between p-3 ">
          <div
            className={
              type === "all"
                ? "flex justify-center items-center oswald  white-50 inline-block py-3 px-4 rounded-lg  active hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white  pa2 pointer tc flex-auto f7 fw6 ph3   tcz-1 bb b--red_Orange white bw1 "
                : "flex justify-center items-center oswald  white-50 inline-block py-3 px-4 rounded-lg  pa2 pointer tc flex-auto f7 fw6 ph3   tcz-1 bb b--red_Orange white bw1 "
            }
            onClick={(e) => setType(Type.all)}
          >
            <div className="text-white">All</div>
          </div>
          <div
            className={
              type === "international"
                ? "flex justify-center items-center oswald  white-50 inline-block py-3 px-4 rounded-lg  active hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white  pa2 pointer tc flex-auto f7 fw6 ph3   tcz-1 bb b--red_Orange white bw1 "
                : "flex justify-center items-center oswald  white-50 inline-block py-3 px-4 rounded-lg   pa2 pointer tc flex-auto f7 fw6 ph3   tcz-1 bb b--red_Orange white bw1 "
            }
            onClick={() => setType(Type.international)}
          >
            <div className="text-white"> International</div>
          </div>
          <div
            className={
              type === "domestic"
                ? "flex justify-center items-center oswald  white-50 inline-block py-3 px-4 rounded-lg  active hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white  pa2 pointer tc flex-auto f7 fw6 ph3   tcz-1 bb b--red_Orange white bw1 "
                : "flex justify-center items-center oswald  white-50 inline-block py-3 px-4 rounded-lg  pa2 pointer tc flex-auto f7 fw6 ph3   tcz-1 bb b--red_Orange white bw1 "
            }
            onClick={() => setType(Type.domestic)}
          >
            <div className="text-white">Domestic</div>
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={data?.newSchedule?.length || 0}
        next={loadMoreSchedules}
        hasMore={true}
        loader={fetchMoreLoading ? <Loader /> : null}
      >
        <ScheduleCard data={data?.newSchedule} />
      </InfiniteScroll>
    </>
  );
};
