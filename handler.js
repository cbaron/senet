module.exports = Object.create( {

  factory(c) {

    Object.create( {
      handle() {
        this.client.on( 'error', this.onError )
        this.client.on( 'end', this.onEnd )
        this.client.setEncoding('utf8')
        this.client.on( 'data', this.onData )
      }

      onData(data) { this.data += data },

      onEnd() {
        try {
          let data = JSON.parse(this.data)
        }
        catch(e) {
          console.log( e.stack || e );
        }
      },
      
      onError(e) {
        console.log( e.stack || e );
      }
    },
    { client: { value: c },
      data: { value: '' }
    } ).handle()

  },

} ).factory(c)
