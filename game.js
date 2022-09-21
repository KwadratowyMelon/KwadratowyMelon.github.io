kaboom({
    background: [134,135,247],
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
})

const MOVE_SPEED = 120
let ENEMY_SPEED = 25
const JUMP_FORCE = 360
const BIG_JUMP_FORCE = 550
let CURRENT_JUMP_FORCE = JUMP_FORCE
let isJumping = true
const score = 0
const DEATH_FALL = 400
let proceed_info = null


loadRoot('https://i.imgur.com/')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('evil-shroom', 'KPO3fR9.png')
loadSprite('brick', 'pogC9x5.png')
loadSprite('block', 'M6rwarW.png')
loadSprite('mario', 'Wb1qfhK.png')
loadSprite('mushroom', '0wMd92p.png')
loadSprite('surprise', 'gesQ1KP.png')
loadSprite('unboxed', 'bdrLpi6.png')
loadSprite('pipe-top-left', 'ReTPiWY.png')
loadSprite('pipe-top-right', 'hj2GK4n.png')
loadSprite('pipe-bottom-left', 'c1cYSbt.png')
loadSprite('pipe-bottom-right', 'nqQ79eI.png')
loadSprite('flower', 'uaUm9sN.png')
loadSprite('blue-block', 'fVscIbn.png')
loadSprite('blue-brick', '3e5YRQd.png')
loadSprite('blue-steel', 'gqVoI2b.png')
loadSprite('blue-evil-shroom', 'SvV4ueD.png')
loadSprite('blue-surprise', 'RMqCc1G.png')
loadSprite('boss-right', 'W947Xat.png')
loadSprite('boss-left', 'HrWIZLv.png')
loadSprite('evil-turtle-let', 'uxiVeD1.png')
loadSprite('evil-turtle-right', '5bthqZZ.png')
loadSprite('princess', 'Ij9g6V5.png')
loadSprite('small-castle', 'Y6hml1u.png')
loadSprite('big-castle', 'fIEzCGp.png')
loadSprite('single-cloud', 'gRTmf8Z.png')
loadSprite('cloud', 'ywQN1pE.png')



scene("game", ({level, score}) => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const maps = [

    [
        '                  e         e     ',
        '       r      r       r           ',
        '                           e      ',
        '                                  ',
        '                                  ',
        '                                  ',
        '      %  =*=%=                    ',
        '                                  ',
        '                         -+       ',
        '                ^    ^   ()    ?? ',
        '===========================   ====',
    ],
    [
        
        ')                                  (',
        ')                             -+   (',
        ')                             ()   (',
        ')     %%===========================(',
        ')                                  (',
        ')                                  (',
        ')    ==============================(',
        ')                                  (',
        ')                  ^               (',
        ')==============================    (',
        ')                                  (',
        ')                ^                 (',
        '============================ =======',
    ],
    [
        '                                                            ',
        '                                                            ',
        '                                                            ',
        '                                                            ',
        '                                      %%%==                 ',
        '                               %                            ',
        '      =%%=*=%=                                              ',
        '                                      =======               ',
        '                               =                   -+       ',
        ' ?                 ^          ===              ^ ? ()   ????',
        '========== ======================================= ==   ====',
    ],
    [
        
        ')                                  (',
        ')                             -+   (',
        ')                             ()   (',
        ')    %%%===========================(',
        ')                                  (',
        ')                                  (',
        ')    ===================== ========(',
        ')                                  (',
        ')                  ^               (',
        ')=============== ==============    (',
        ')                                  (',
        ')                ^                 (',
        '===========================  =======',
    ],
    [
        '&          r            r  r           e                    r     &',
        '&               r         r        x      r                       &',
        '&      r               e           x x           x xxx            &',
        '&                                x x x         x x             @@@&',
        '&                                x x x x     x x x                &',
        '&                              x x x x x   x x x x       xxxxxxxxx&',
        '&      @@@@@@@@         x      x x x x x x x x x x                &',
        '&                     x x    x x x x x x x x x x x                &',
        '&                   x x x  x x x x x x x x x x x x            -+  &',
        '&        z    z   x x x x                        x     z      ()  &',
        '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    ],
    [
        '&                                    &',
        '&                                    &',
        '&                                    &',
        '&                                    &',
        '&     @xxxxxxx@@xxxxxxxxxx           &',
        '&                xxxxxxxxx           &',
        '&                xxxxxxxxx      x    &',
        '& xxxxxx   xxxxxxxxxxxxxxx           &',
        '&                xxxxxxxxx       -+  &',
        '&                xxxxxxxxx  z    ()  &',
        '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    ],
    [
        '&                                     &',
        '&                                     &',
        '&       xxx@@xxxxxxxxx@@@@@xxxxx      &',
        '&             x                       &',
        '&             x     xxxxxxxxxxxxxxxxx &',
        '&xxxxxxxxx    x                       &',
        '&             xxxxxxxxxxxxxxxxxxx     &',
        '&             x                       &',
        '&     xxxxx@@xx           xxxxxx@@@xxx&',
        '&             xxxxx                   &',
        '&             xxxxxxxxxxxxx      x    &',
        '&xxxxxxx   xxxx   xxxxxxxxxx          &',
        '&             x-+ xxxxxxxxx           &',
        '&             x()                     &',
        '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    ],
    [
        '                       ============================                                                             ',
        '     %%%                                          =                                                             ',
        '              ==%%==                              =      ======                                                 ',
        '                                                  =                                                             ',
        '     ======                                       =                                                             ',
        '              =======    ====                     =                 =====                                       ',
        '                                 ====             =                                                             ',
        '                                                  =                                                   q         ',
        '                                         ====     =      =======                                                ',
        '                                                  =                                                             ',
        '                                                  =                                                             ',
        '         %%%%%%%          =========================                                                             ',
        '                                             ?        =       ^     =       ^     =                             ',
        '===========================                  =====================================================-+c===========',
        '                                                                                                  ()            ',
        '                                                                                                                ',
    ],

    ]

    const LevelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('block'), solid()],
        '$': [sprite('coin'), 'coin'],
        '%': [sprite('surprise'), solid(), 'coin-surprise'],
        '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
        '}': [sprite('unboxed'), solid()],
        '(': [sprite('pipe-bottom-left'), solid(), scale(0.5), 'obstacle'],
        ')': [sprite('pipe-bottom-right'), solid(), scale(0.5), 'obstacle'],
        '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
        '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
        '^': [sprite('evil-shroom'), solid(), body(), origin('bot'), 'dangerous'],
        '#': [sprite('mushroom'), solid(), 'mushroom', body()],
        '!': [sprite('blue-block'), solid(), scale(0.5), 'obstacle'],
        '&': [sprite('blue-brick'), solid(), scale(0.5), 'obstacle'],
        'z': [sprite('blue-evil-shroom'), solid(), body(), origin('bot'), scale(0.5), 'dangerous'],
        '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
        'x': [sprite('blue-steel'), solid(), scale(0.5), 'obstacle'],
        '?': [sprite('flower'), scale(0.5), 'flower'],
        'q': [sprite('boss-right')],
        'w': [sprite('boss-left')],
        'p': [sprite('princess')],
        'e': [sprite('single-cloud')],
        'r': [sprite('cloud')],
        'c': [sprite('big-castle'),area({ width: 10, height: 240 }),origin("bot"),'castle'],
        'v': [sprite('small-castle'),area({ width: 10, height: 240 }),origin("bot"),'castle']
    }

    const gameLevel = addLevel(maps[level], LevelCfg)

    const scoreLabel = add([
        text(score),
        pos (30,20),
        layer('ui'),
        {
            value: score,
        }
    ])

    add([text('level ' + parseInt(level + 1)), pos(30,6)])

    function big() {
        let timer = 0
        let isBig = false
        return {
          update() {
            if (isBig) {
              CURRENT_JUMP_FORCE = BIG_JUMP_FORCE
              timer -= dt()
              if (timer <= 0) {
                this.smallify()
              }
            }
          },
          isBig() {
            return isBig
          },
          smallify() {
            this.scale = vec2(1)
            CURRENT_JUMP_FORCE = JUMP_FORCE
            timer = 0
            isBig = false
          },
          biggify(time) {
            this.scale = vec2(2)
            timer = time
            isBig = true     
          }
        }
    }


    const player = add([
        sprite('mario'), solid(), pos(40,210), body(), big(), origin('bot')
    ])

    player.on("headbump", (obj) => {
        if (obj.is('coin-surprise')) {
            gameLevel.spawn('$', obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}', obj.gridPos.sub(0,0))
        }

        if (obj.is('mushroom-surprise')) {
            gameLevel.spawn('#', obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}', obj.gridPos.sub(0,0))
        }
    })

    player.collides('mushroom', (m) => {
        destroy(m)
        player.biggify(6)
    })

    player.collides('coin', (c) => {
        destroy(c)
        scoreLabel.value += 10
        scoreLabel.text = scoreLabel.value
    })
    
    player.collides('dangerous', (d) => {
        if (isJumping) {
            destroy(d)
        }
        else {
            go('lose', {score: scoreLabel.value})
        }
    })

    player.collides('pipe', () => {
        if(proceed_info === null){
            proceed_info = add([
            text("press keyDown \nto proceed to \nthe next level"),
            pos (player.pos.x - 45, player.pos.y - 60),
            layer('ui'),
            ])}

        keyPress('down', () => {
            proceed_info = null
            go('game', {
                level: (level + 1) % maps.length,
                score: scoreLabel.value,
            })
        })
    })

    player.action(() => {
        if(player.grounded()) {
            isJumping = false
        }
    })

    player.action(() => {
        camPos(player.pos)
        if (player.pos.y >= DEATH_FALL) {
            go('lose', {score: scoreLabel.value})
        }
    })


    action('mushroom', (m) => {
        m.move(ENEMY_SPEED,0)
    })

    action('dangerous', (d) => {
        d.move(-ENEMY_SPEED, 0)
    })

    action('dangerous', (d) => {
        d.collides('obstacle', () => {
            ENEMY_SPEED = ENEMY_SPEED*(-1)
        })
    })


    keyDown('left', () => {
        player.move(-MOVE_SPEED, 0)
    })

    keyDown('right', () => {
        player.move(MOVE_SPEED, 0)
    })

    keyPress('space', () => {
        if(player.grounded()) {
            isJumping = true
            player.jump(CURRENT_JUMP_FORCE)
        }
    })

})

scene('lose', ({ score }) => {
    add([text(score,32), origin('center'), pos(width()/2,height()/2)])
})



start("game", { level: 7, score: 0 })