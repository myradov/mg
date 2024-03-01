import Head from 'next/head';
import { useRouter } from 'next/router';

import ServiceMap from '../components/ServiceMap';

import Map from '../components/Map';
import { Address } from '../components/Address';
import { useEffect,useState } from 'react';

const DEFAULT_CENTER = [39.04814576696578, 58.9551388487302]

const coords = [
    {addresslat: "37.903299", addresslng: "58.381460"}, 
    {addresslat: "39.518561", addresslng: "54.339540"},
    {addresslat: "37.609516", addresslng: "61.852505"},
    {addresslat: "37.907311", addresslng: "58.506063"},
]

const locationTest = [
    {city: 'Ashgabat', address: 'Parahat 2, Imperial Business Center, 7 floor'}, 
    {city: 'Balkan', address: 'Parahat 2, Imperial Business Center, 7 floor'}, 
    {city: 'Mary', address: 'Parahat 2, Imperial Business Center, 7 floor'}, 
    {city: 'Ahal', address: 'Parahat 2, Imperial Business Center, 7 floor'}
]

 

const services = () => {
    const { locale } = useRouter()
    // console.log('coords', coords)
    // console.log('locations', locationTest)
    // console.log(locations)
    const [address, setAddress] = useState(null);
    const [map, setMap] = useState(null)

    useEffect(() => {
        if (!address || !map) return;
        const { addresslat, addresslng } = address;
        map.flyTo([addresslat, addresslng]);
        // console.log('Address',address)
    },[address, map])

    const handleCardClick = (item) => {
        console.log(item);
        setAddress(item);
        // item.flyTo([item.addresslat, item.addresslng]);
    };

    return (
        <>
            <Head>
                <title>Services page</title>
            </Head>
            <section className="relative w-full h-screen pt-8" id="services">
                <main className="relative mt-6 p-3 lg:mt-20 w-full lg:w-2/3 mx-auto h-auto flex flex-col justify-center items-center">
                    <h4 className='text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-500 to-gray-100 font-extrabold my-2 uppercase drop-shadow-2xl'>Services</h4>
                    <Map className='relative w-full h-96 mt-2' center={DEFAULT_CENTER} zoom={6} scrollWheelZoom={false} whenCreated={setMap} map={address}>
                        {({ TileLayer, Marker, Popup }) => (
                            <>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />
                            {
                                coords.map((location, i) => (
                                    <Marker position={[location.addresslat, location.addresslng]} key={location.id} onmouseover={() => setAddress(location)}>
                                        {
                                            address && (
                                                <Popup className='bg-gray-200' position={[address.addresslat, address.addresslng]} onClose={() => setAddress(null)}>
                                                    <div className='w-full h-auto font-bold text-lg'>
                                                        {address.city}
                                                    </div>
                                                    <div className='w-full h-auto text-md'>
                                                        {address.address}
                                                    </div>
                                                </Popup>
                                            )
                                        }
                                    </Marker>
                                ))
                            }
                            </>
                        )}
                    </Map>

                    {/* Address Card Section */}

                    <section className='relative mt-4 '>
                        <h2 className='relative flex justify-center text-2xl font-bold py-2 mt-2'>Our addresses</h2>
                        <ul className='flex justify-center items-stretch w-full h-auto'>
                            {
                                locationTest.map((address) => (
                                    <Address address={address} key={address.id} onClick={() => handleCardClick(address)}/>
                                ))
                            }
                        </ul>
                    </section>
                </main>
            </section>
        </>
    )
}

export default services

// export const getStaticProps = async() => {
//     const res = await fetch(`${process.env.BASE_URL}/address?fields=id,addresslat,addresslng,phone,translations.*`)
//     const locations = await res.json()

//     if(!locations) {
//         return {
//             notFound: true
//         }
//     }
    
//     return {
//         props: {
//             locations
//         }
//     }
// }
