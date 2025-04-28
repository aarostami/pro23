// 'use client'

export default function Page() {	//or Contact() {}
	var isServer = typeof window === 'undefined'
	console.log(isServer ? 'server' : 'client')
	
	return <div>
		hello contact
	</div>
}