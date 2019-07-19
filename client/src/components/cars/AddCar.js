import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { postCar } from '../../actions/carActions';
import FileBase from 'react-file-base64';

class AddCar extends Component {

    constructor() {
        super();
        this.state = {
            proizvodjac: '',
            model: '',
            cijena: '',
            godiste: '',
            kilometraza: '',
            kubikaza: '',
            kw: '',
            transmisija: '',
            gorivo: '',
            brojvrata: '',
            boja: '',
            stanje: '',
            detalji: '',
            errors: {},
            imageName: '',
            imageData: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    getFiles(files) {
        this.setState({
            imageName: "base-image-" + Date.now()
        })
        this.setState({
            imageData: files.base64.toString()
        })

    }

    onSubmit(e) {
        e.preventDefault();

        const noviAuto = {
            proizvodjac: this.state.proizvodjac,
            model: this.state.model,
            cijena: this.state.cijena,
            godiste: this.state.godiste,
            kilometraza: this.state.kilometraza,
            kubikaza: this.state.kubikaza,
            kw: this.state.kw,
            transmisija: this.state.transmisija,
            gorivo: this.state.gorivo,
            brojvrata: this.state.brojvrata,
            boja: this.state.boja,
            stanje: this.state.stanje,
            detalji: this.state.detalji,
            imageName: this.state.imageName,
            imageData: this.state.imageData
        }
        this.props.postCar(noviAuto, this.props.history)
    }

    render() {

        const { proizvodjac, model, cijena, godiste, kilometraza, kubikaza, kw, transmisija, gorivo, brojvrata, boja, stanje, detalji, errors } = this.state;

        return (
            <div className="add-car">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <h3 className="text-center mb-3">Dodavanje automobila</h3>
                            <form onSubmit={this.onSubmit} noValidate>
                                <div className="form-group">
                                    <label htmlFor="proizvodjac">Izaberite proizvodjaca automobila: </label>
                                    <select className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.proizvodjac })} name="proizvodjac" id="proizvodjac" onChange={this.onChange} value={proizvodjac}>
                                        <option value=""></option>
                                        <option value="Alfa Romeo">Alfa Romeo</option>
                                        <option value="Aston Martin">Aston Martin</option>
                                        <option value="Audi">Audi</option>
                                        <option value="Škoda">Škoda</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Buggatti">Buggatti</option>
                                        <option value="Chevrolet">Chevrolet</option>
                                        <option value="Citroen">Citroen</option>
                                        <option value="Corvette">Corvette</option>
                                        <option value="Dacia">Dacia</option>
                                        <option value="Ferrari">Ferrari</option>
                                        <option value="Fiat">Fiat</option>
                                        <option value="Ford">Ford</option>
                                        <option value="Honda">Honda</option>
                                        <option value="Hummer">Hummer</option>
                                        <option value="Hyundai">Hyundai</option>
                                        <option value="Jaguar">Jaguar</option>
                                        <option value="Jeep">Jeep</option>
                                        <option value="Kia">Kia</option>
                                        <option value="Lada">Lada</option>
                                        <option value="Lamborghini">Lamborghini</option>
                                        <option value="Mazda">Mazda</option>
                                        <option value="Mercedes">Mercedes</option>
                                        <option value="Mini">Mini</option>
                                        <option value="Mitsubishi">Mitsubishi</option>
                                        <option value="Nissan">Nissan</option>
                                        <option value="Opel">Opel</option>
                                        <option value="Peugeot">Peugeot</option>
                                        <option value="Porsche">Porsche</option>
                                        <option value="Renault">Renault</option>
                                        <option value="Rolls Royce">Rolls Royce</option>
                                        <option value="Rover">Rover</option>
                                        <option value="Seat">Seat</option>
                                        <option value="Smart">Smart</option>
                                        <option value="Suzuki">Suzuki</option>
                                        <option value="Tesla">Tesla</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="Volkswagen">Volkswagen</option>
                                        <option value="Volvo">Volvo</option>
                                        <option value="Zastava">Zastava</option>
                                        <option value="Yugo">Yugo</option>
                                        <option value="Drugo">Drugo ...</option>
                                    </select>
                                    {errors.proizvodjac && (<div className="invalid-feedback">{errors.proizvodjac}</div>)}
                                </div>
                                <div className="form-group">
                                    <input value={model} onChange={this.onChange} type="text" className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.model })} name="model" id="model" placeholder="Model" />
                                    {errors.model && (<div className="invalid-feedback">{errors.model}</div>)}
                                </div>
                                <div className="form-group">
                                    <input value={cijena} onChange={this.onChange} type="number" className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.cijena })} name="cijena" id="cijena" placeholder="Cijena u KM" />
                                    {errors.cijena && (<div className="invalid-feedback">{errors.cijena}</div>)}
                                </div>
                                <div className="form-group">
                                    <input value={godiste} onChange={this.onChange} type="number" className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.godiste })} name="godiste" id="godiste" placeholder="Godiste" />
                                    {errors.godiste && (<div className="invalid-feedback">{errors.godiste}</div>)}
                                </div>
                                <div className="form-group">
                                    <input value={kilometraza} onChange={this.onChange} type="number" className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.kilometraza })} name="kilometraza" id="kilometraza" placeholder="Kilometraza" />
                                    {errors.kilometraza && (<div className="invalid-feedback">{errors.kilometraza}</div>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="kubikaza">Kubikaza:</label>
                                    <select className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.kubikaza })} name="kubikaza" id="kubikaza" onChange={this.onChange} value={kubikaza}>
                                        <option value=""></option>
                                        <option value="1.0">1.0</option>
                                        <option value="1.1">1.1</option>
                                        <option value="1.2">1.2</option>
                                        <option value="1.3">1.3</option>
                                        <option value="1.4">1.4</option>
                                        <option value="1.5">1.5</option>
                                        <option value="1.6">1.6</option>
                                        <option value="1.7">1.7</option>
                                        <option value="1.8">1.8</option>
                                        <option value="1.9">1.9</option>
                                        <option value="2.0">2.0</option>
                                        <option value="2.1">2.1</option>
                                        <option value="2.2">2.2</option>
                                        <option value="2.3">2.3</option>
                                        <option value="2.4">2.4</option>
                                        <option value="2.5">2.5</option>
                                        <option value="2.6">2.6</option>
                                        <option value="2.7">2.7</option>
                                        <option value="2.8">2.8</option>
                                        <option value="2.9">2.9</option>
                                        <option value="3.0">3.0</option>
                                        <option value="3.1">3.1</option>
                                        <option value="3.2">3.2</option>
                                        <option value="3.3">3.3</option>
                                        <option value="3.4">3.4</option>
                                        <option value="3.5">3.5</option>
                                        <option value="3.6">3.6</option>
                                        <option value="3.7">3.7</option>
                                        <option value="3.8">3.8</option>
                                        <option value="3.9">3.9</option>
                                        <option value="4.0">4.0</option>
                                        <option value="4.1">4.1</option>
                                        <option value="4.2">4.2</option>
                                        <option value="4.3">4.3</option>
                                        <option value="4.4">4.4</option>
                                        <option value="4.5">4.5</option>
                                        <option value="4.6">4.6</option>
                                        <option value="4.7">4.7</option>
                                        <option value="4.8">4.8</option>
                                        <option value="4.9">4.9</option>
                                        <option value="5.0">5.0</option>
                                    </select>
                                    {errors.kubikaza && (<div className="invalid-feedback">{errors.kubikaza}</div>)}
                                </div>
                                <div className="form-group">
                                    <input value={kw} onChange={this.onChange} type="number" className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.kw })} name="kw" id="kw" placeholder="Kilovata (KW)" />
                                    {errors.kw && (<div className="invalid-feedback">{errors.kw}</div>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="transmisija">Transmisija:</label>
                                    <select className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.transmisija })} name="transmisija" id="transmisija" onChange={this.onChange} value={transmisija}>
                                        <option value=""></option>
                                        <option value="Manuelni">Manuelni</option>
                                        <option value="Automatik">Automatik</option>
                                        <option value="Polu-automatik">Polu-automatik</option>
                                    </select>
                                    {errors.transmisija && (<div className="invalid-feedback">{errors.transmisija}</div>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gorivo">Gorivo:</label>
                                    <select className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.gorivo })} name="gorivo" id="gorivo" onChange={this.onChange} value={gorivo}>
                                        <option value=""></option>
                                        <option value="Dizel">Dizel</option>
                                        <option value="Benzin">Benzin</option>
                                        <option value="Plin">Plin</option>
                                        <option value="Hibrid">Hibrid</option>
                                        <option value="Elektro">Elektro</option>
                                    </select>
                                    {errors.gorivo && (<div className="invalid-feedback">{errors.gorivo}</div>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="brojvrata">Broj vrata:</label>
                                    <select className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.brojvrata })} name="brojvrata" id="brojvrata" onChange={this.onChange} value={brojvrata}>
                                        <option value=""></option>
                                        <option value="2/3">2/3</option>
                                        <option value="4/5">4/5</option>
                                    </select>
                                    {errors.brojvrata && (<div className="invalid-feedback">{errors.brojvrata}</div>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="boja">Boja:</label>
                                    <select className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.boja })} name="boja" id="boja" onChange={this.onChange} value={boja}>
                                        <option value=""></option>
                                        <option value="Bijela">Bijela</option>
                                        <option value="Bordo">Bordo</option>
                                        <option value="Crna">Crna</option>
                                        <option value="Crvena">Crvena</option>
                                        <option value="Ljubicasta">Ljubicasta</option>
                                        <option value="Narandzasta">Narandzasta</option>
                                        <option value="Plava">Plava</option>
                                        <option value="Siva">Siva</option>
                                        <option value="Smedja">Smedja</option>
                                        <option value="Srebrena">Srebrena</option>
                                        <option value="Zelena">Zelena</option>
                                        <option value="Zlatna">Zlatna</option>
                                        <option value="Zuta">Zuta</option>
                                    </select>
                                    {errors.boja && (<div className="invalid-feedback">{errors.boja}</div>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stanje">Stanje:</label>
                                    <select className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.stanje })} name="stanje" id="stanje" onChange={this.onChange} value={stanje}>
                                        <option value=""></option>
                                        <option value="Korisceno">Korisceno</option>
                                        <option value="Novo">Novo</option>
                                    </select>
                                    {errors.stanje && (<div className="invalid-feedback">{errors.stanje}</div>)}
                                </div>
                                <div className="form-group">
                                    <textarea className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.detalji })} name="detalji" id="detalji" cols="30" rows="5" onChange={this.onChange} value={detalji} placeholder="Unesite detalje"></textarea>
                                    {errors.detalji && (<div className="invalid-feedback">{errors.detalji}</div>)}
                                </div>
                                <div className="form-group">
                                    <p className="lead">Izaberite fotografiju: </p>
                                    <FileBase type="file" multiple={false} onDone={this.getFiles.bind(this)}></FileBase>
                                </div>
                                <button onSubmit={this.onSubmit} className="btn btn-primary btn-block mt-4 mb-4">Postavi automobil</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AddCar.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    postCar: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.authorization,
    errors: state.errors
});

export default connect(mapStateToProps, { postCar })(withRouter(AddCar));