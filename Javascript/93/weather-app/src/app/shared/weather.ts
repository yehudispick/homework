export interface Weather{
    location: string;
    icon: any;
    description: string;
}

export interface WeatherServerProps {
    main:{
        temp: string
    }
    weather: {
        description: string,
        icon: string
    }
    name: string;
}