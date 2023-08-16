import ChatButton from "./ChatButton"

function Footer() {
    return (
        <footer className="px-48 py-12 font-Euclid ">
        <div className="relative py-12">
            <img src="/images/logoWhiteBg.png" alt="" className="w-[60px] absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]" />
        <div className="border"/>
        </div>

        <div className="grid grid-cols-5 gap-6 ">
            <div className="flex flex-col gap-6 text-slate-500  uppercase">
                <h4 className="font-semibold text-black ">PRODUCTS</h4>
                <p className="hover:text-black cursor-pointer text-sm">adult pain management</p>
                <p className="hover:text-black cursor-pointer text-sm">allergy relief</p>
                <p className="hover:text-black cursor-pointer text-sm">asthma</p>
                <p className="hover:text-black cursor-pointer text-sm">cough and cold</p>
                <p className="hover:text-black cursor-pointer text-sm">diabetes medication</p>
                <p className="hover:text-black cursor-pointer text-sm">all product</p>
            </div>
            <div className="flex flex-col gap-6 text-slate-500  uppercase">
                <h4 className="font-semibold text-black ">services</h4>
                <p className="hover:text-black cursor-pointer text-sm">product sales</p>
                <p className="hover:text-black cursor-pointer text-sm">medical help</p>
                <p className="hover:text-black cursor-pointer text-sm">medical diagnose</p>
                <p className="hover:text-black cursor-pointer text-sm">first aid kit</p>
                <p className="hover:text-black cursor-pointer text-sm">sexual health</p>
                <p className="hover:text-black cursor-pointer text-sm">all services</p>
            </div>
            <div className="flex flex-col gap-6 text-slate-500  uppercase">
                <h4 className="font-semibold text-black ">help</h4>
                <p className="hover:text-black cursor-pointer text-sm">contact support</p>
                <p className="hover:text-black cursor-pointer text-sm">satisfaction guarantee</p>
                <p className="hover:text-black cursor-pointer text-sm">return policy</p>
                <p className="hover:text-black cursor-pointer text-sm">shipping options</p>
                <p className="hover:text-black cursor-pointer text-sm">pricing</p>
                <p className="hover:text-black cursor-pointer text-sm">view all</p>
            </div>
            <div className="flex flex-col gap-6 text-slate-500  uppercase">
                <h4 className="font-semibold text-black ">about</h4>
                <p className="hover:text-black cursor-pointer text-sm">health tips</p>
                <p className="hover:text-black cursor-pointer text-sm">our story</p>
                <p className="hover:text-black cursor-pointer text-sm">testimonials</p>
                <p className="hover:text-black cursor-pointer text-sm">blog</p>
                <p className="hover:text-black cursor-pointer text-sm">careers</p>
                <p className="hover:text-black cursor-pointer text-sm">view all</p>
            </div>
            <div className="flex flex-col justify-between text-slate-500  capitalize">
                <h4 className="font-semibold text-black ">CONTACT</h4>
                <p className=" flex items-center gap-2 hover:text-black cursor-pointer text-sm"> <span><img src="/images/footlocationIcon.png" alt="" className="w-8" /></span>1223, address Lagos, Nigeria West Africa.</p>
                <p className=" flex items-center gap-2 hover:text-black cursor-pointer text-sm"><span><img src="/images/phoneIcon.png" alt="" className="w-6" /></span>Call 09087654321</p>
                <p className=" flex items-center gap-2 hover:text-black cursor-pointer text-sm"><span><img src="/images/chatIcon.png" alt="" className="w-6" /></span>Chat with an expert</p>
                <p className=" flex items-center gap-2 hover:text-black cursor-pointer text-sm"><span><img src="/images/emailIcon.png" alt="" className="w-6" /></span>email us</p>
                
            </div>
        </div>
        <div className="flex gap-3 mt-6 mb-3">
            <a href="/"> <img src="/images/fb.png" alt="" className="w-8" /></a>
            <a href="/"> <img src="/images/tw.png" alt="" className="w-8" /></a>
            <a href="/"> <img src="/images/ig.png" alt="" className="w-8" /></a>
            <a href="/"> <img src="/images/In.png" alt="" className="w-8" /></a>
            <a href="/"> <img src="/images/yt.png" alt="" className="w-8" /></a>
            <a href="/"> <img src="/images/tk.png" alt="" className="w-8" /></a>
        </div>
        <div className="border"/>
        <div className="flex justify-end py-12 ">
            <p className="text-sm">&copy; Copyright 2023, All Right Reserved.</p>
        </div>
        
        <ChatButton />


    </footer>
    )
}

export default Footer
