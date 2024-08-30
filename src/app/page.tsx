import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Feature from './feature'
import SheetsData from '@/components/common/Excel'
import { Medal, HeartPulse, Handshake } from 'lucide-react'
import Link from 'next/link'
import { Divider } from '@/components/ui/divider'
import SheetsImages from '@/components/common/drive'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-20 pt-11 pb-24 w-full
        items-center text-center gap-12 bg-color-1"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Gimnasio Powerlifting
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Transforma tu esfuerzo en resultados, cada día es
          una nueva oportunidad para superar tus límites
        </Typography>
        <Link href="#Contacto">
          <Button size="lg" variant="perso">
            {`Empecemos`}
          </Button>
        </Link>
        <div className="p-2 border-4 border-[#421212]/40">
          <img
            width={1024}
            height={632}
            alt="Gym image"
            src="/pic.jpg"
          />
        </div>
      </div>
      <div className="w-full h-[200px] divider-container">
        <Divider
          variant="primary"
          size="lg"
          image="pic2.jpg"
          text="El éxito se construye repitiendo hoy lo que otros no harán."
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography
            className="max-w-2xl mb-10"
            variant="h1"
          >
            Staff
          </Typography>
          <div
            className="flex flex-col sm:flex-row gap-10 mx-auto items-center p-2
              border-4 border-[#421212]/40"
          >
            <img
              className="sm:w-[15rem]"
              alt="Paula image"
              src="/man.jpg"
            />
            <img
              className="sm:w-[15rem]"
              alt="Paula image"
              src="/woman.jpg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Ofrecemos
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Medal size={24} />}
              headline="Crossfit"
              description="Entrenamiento funcional de alta intensidad que mejora fuerza, resistencia y agilidad con movimientos variados."
            />
            <Feature
              icon={<HeartPulse size={24} />}
              headline="Spinning"
              description="Ciclismo indoor que quema calorías, fortalece piernas y mejora el cardio al ritmo de la música."
            />
            <Feature
              icon={<Handshake size={24} />}
              headline="Musculación"
              description="Ejercicios de fuerza con pesas para aumentar masa muscular y fortalecer todo el cuerpo."
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Horarios
          </Typography>
          <div>
            <SheetsData />
          </div>
        </div>
        
      </div>
      <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Galeria
          </Typography>
          <div className="flex flex-col gap-6 max-w-[55%] items-center"> 
            <SheetsImages />
          </div>
        </div>
      <div className="w-full h-[200px] divider-container">
        <Divider
          variant="primary"
          size="lg"
          image="pic.jpg"
          text="Más que un gimnasio, es tu camino hacia la grandeza"
        />
      </div>

      <div
        id="Contacto"
        className="flex flex-col gap-6 items-center"
      >
        <Typography className="max-w-2xl" variant="h1">
          Contacto
        </Typography>
        <Typography className="max-w-2xl" variant="h6">
          Por cualquier consulta no dudes en hablarme!
        </Typography>
        <Link
          href="https://wa.me/5491131550341"
          target="_blank"
        >
          <Button size="lg" variant="perso">
            {`Agendar`}
          </Button>
        </Link>
      </div>
    </div>
  )
}
