import React from 'react'

const Vision = () => {
  return (
    <section className="bg-secondary py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl text-center font-bold mb-8">Our Vision and Mission</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Vision</h3>
          <p>Africa of Equitable Access to Medicine.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Mission</h3>
          <p>To overcome the barriers to patient access, promote equitable access to medicines in Africa's most vulnerable and underserved communities, through partnership & collaboration.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Vision