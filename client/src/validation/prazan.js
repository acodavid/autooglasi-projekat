const prazan = vr => {
    return (
        vr === undefined ||
        vr === null ||
        (typeof vr === 'object' && Object.keys(vr).length === 0) ||
        (typeof vr === 'string' && vr.trim().length === 0)
    );
};

export default prazan;