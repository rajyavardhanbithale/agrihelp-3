
export default function EndpointError() {
    return (
        <>
            <div className="flex  flex-wrap justify-center text-red-500 text-2xl">
                <div class="grid place-content-center bg-white px-4">
                    <div class="text-center">
                        <img
                            src="/assets/error.gif"
                            alt=""
                            className="mx-auto my-auto w-96 h-72"
                        />
                        <h1 class="mt-12 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Uh-oh!
                        </h1>

                        <p class="mt-4 text-xl md:text-2xl text-gray-500">
                            Temporary Service Interruption: Internal Server Error - We'll be back
                            shortly to ensure seamless operations.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
