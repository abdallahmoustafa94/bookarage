import {useState} from 'react'
import {Rating, Item} from 'semantic-ui-react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Legend,
  ResponsiveContainer,
  LineChart,
} from 'recharts'
import eventImg from '../../assets/images/auth-bg.png'

const ChartsAndReviews = () => {
  const [data, setData] = useState([
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apri',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Sept',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Oct',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Nov',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Dec',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ])

  const items = [
    {
      childKey: 0,
      image: '../../assets/images/auth-bg.png',
      header: 'title',
      description: 'meta',
      meta: 'address',
    },
    {
      childKey: 1,
      image: '../../assets/images/auth-bg.png',
      header: 'title',
      description: 'meta',
      meta: 'address',
    },
  ]
  return (
    <div className="my-8">
      <div className="flex w-full  space-x-4  ">
        <div className="w-2/3 p-8">
          <div className="bg-white p-8">
            <BarChart
              width={700}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <Bar dataKey="pv" fill="red" />
            </BarChart>
          </div>
          <div className="my-8 bg-white p-8">
            <LineChart
              width={700}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="red"
                activeDot={{r: 8}}
              />
            </LineChart>
          </div>

          <div className="my-8 bg-white p-8">
            <div className="flex w-full">
              <p className="flex justify-start w-1/2 font-semibold leading-6">
                Steve Marshal
              </p>
              <p className="flex w-1/2 justify-end text-gray-300">
                Septemper 03
              </p>
            </div>
            <p className="text-blue-900 -my-0.5">Kia - cerato (2010)</p>
            <Rating icon="star" defaultRating={3} maxRating={5} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className=" w-1/3 ">
          <div className="flex w-full bg-white p-8  text-center">
            <div className="w-1/3">
              <p className="font-normal text-6xl mb-2"> 17 </p>
              <p className="text-gray-400">Total</p>
            </div>
            <div className="w-1/3">
              <p className="font-normal text-6xl mb-2 "> 14 </p>
              <p className="text-gray-400">Pending</p>
            </div>
            <div className="w-1/3">
              <p className="font-normal text-6xl mb-2 "> 3 </p>
              <p className="text-gray-400">Ongoing</p>
            </div>
          </div>

          <div className="bg-white p-8">
            <Item.Group items={items} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartsAndReviews
