'use client'
import { useState, useEffect } from 'react'
import {Container} from './Container'
import {FadeIn} from './FadeIn'
import {Button} from './Button'

export default function ROICalculatorMini() {
  const [lessonCost, setLessonCost] = useState('')
  const [lessonCount, setLessonCount] = useState('')
  const [manualLifetimeValue, setManualLifetimeValue] = useState('')
  const [calculatedValue, setCalculatedValue] = useState<number | null>(null)
  const [studentsNeeded, setStudentsNeeded] = useState<number | null>(null)

  const monthlyCost = 250
  const yearlyCost = monthlyCost * 12

  useEffect(() => {
    const cost = parseFloat(lessonCost)
    const count = parseFloat(lessonCount)

    if (!isNaN(cost) && !isNaN(count)) {
      const calculated = parseFloat((cost * count).toFixed(2))
      setManualLifetimeValue(calculated.toString())
    }
  }, [lessonCost, lessonCount])

  const calculate = () => {
    const manual = parseFloat(manualLifetimeValue)
    const valueToUse = !isNaN(manual) && manual > 0 ? manual : calculatedValue

    if (valueToUse && valueToUse > 0) {
      const needed = Math.ceil(yearlyCost / valueToUse)
      if (needed > 10) {
        setStudentsNeeded(9999)
      } else {
        setStudentsNeeded(needed)
      }
    } else {
      setStudentsNeeded(null)
    }
  }

  return (
    <Container>
      <FadeIn>
        <div className="bg-white px-8 py-10 rounded-3xl shadow-xl max-w-2xl mx-auto text-center mt-24 border border-neutral-200">
          <h2 className="text-3xl font-display font-semibold text-neutral-900 mb-6">
            How Many Students Would Cover Your Website Cost?
          </h2>
          <p className="text-sm text-neutral-500 mb-4">
            Most schools only need to gain 2–3 new students per year to make the site pay for itself.
          </p>
          <p className="text-base text-neutral-600 mb-8 max-w-md mx-auto">
            We’ll estimate each student’s value by multiplying your average lesson price by the number of lessons they typically take over their lifetime. Or, if you know it already, you can enter your own value below.
          </p>

          <div className="space-y-6 mb-6 text-left">
            <div>
              <label className="block font-medium text-neutral-800 mb-1">
                Average Lesson Price (€)
              </label>
              <input
                type="number"
                value={lessonCost}
                onChange={(e) => {
                  setLessonCost(e.target.value)
                  setStudentsNeeded(null)
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="e.g. 20"
              />
              <p className="text-sm text-neutral-500 mt-1">Typical cost of one lesson.</p>
            </div>
            <div>
              <label className="block font-medium text-neutral-800 mb-1">
                Average Number of Lessons Per Student
              </label>
              <input
                type="number"
                value={lessonCount}
                onChange={(e) => {
                  setLessonCount(e.target.value)
                  setStudentsNeeded(null)
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="e.g. 50"
              />
              <p className="text-sm text-neutral-500 mt-1">Over their full time learning with you.</p>
            </div>
          </div>
          <hr className="my-8 border-t border-neutral-300" />


          <div className="mb-6 text-left">
            <label className="block font-medium text-neutral-800 mb-1">
              Or Enter Your Average Student Lifetime Value Estimate (€)
            </label>
            <input
              type="number"
              value={manualLifetimeValue}
              onChange={(e) => {
                setManualLifetimeValue(e.target.value)
                setLessonCost('')
                setLessonCount('')
                setStudentsNeeded(null)
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="e.g. 1000"
            />
            <p className="text-sm text-neutral-500 mt-1">Use this if you already know your typical student value.</p>
          </div>

          <Button
            onClick={calculate}
            className="w-full max-w-md sm:max-w-none px-6 py-3 mx-auto"
          >
            Calculate ROI
          </Button>

          {studentsNeeded !== null && (
            <div className="animate-fade-in transition-opacity duration-500 ease-in-out">
              {studentsNeeded === 9999 ? (
                <>
                  <p className="mt-6 text-lg text-yellow-700 font-semibold">
                    ⚠️ You’d need more than 10 students per year to break even — which may be a stretch for some schools. If your numbers are accurate, it might be worth reviewing your pricing or retention strategy — or exploring whether ads would make sense down the line.
                  </p>
                  <Button
                    href="/ads"
                    className="mt-4"
                  >
                    Learn more about ad campaigns →
                  </Button>
                </>
              ) : (
                <>
                  <p className="mt-6 text-lg text-neutral-800">
                    Just <strong>{studentsNeeded}</strong>{' '}
                    student{studentsNeeded > 1 && 's'} a year would cover your website cost. That’s well within reach for most schools — even in small towns.
                  </p>
                  <Button
                    href="/availability"
                    className="w-full max-w-md sm:max-w-none px-6 py-3 mx-auto bg-indigo-600 hover:bg-indigo-700 text-white text-center"
                  >
                    Ready to grow? Check if your area is available →
                  </Button>
                  <p className="mt-2 text-sm text-neutral-500">
                    We only work with one school per area — once it's taken, it's locked.
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </FadeIn>
    </Container>
  )
}