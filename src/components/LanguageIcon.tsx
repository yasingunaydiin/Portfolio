export const LanguageIcon = ({ component }: { component: React.ElementType })  => {
    const Component = component;
    return (
        <Component className="size-12"/>
    );
}

/* Now we can adjust the images once, instead of 8 times */