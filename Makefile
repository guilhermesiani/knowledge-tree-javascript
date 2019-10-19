.PHONY: build
build:
	docker-compose build

.PHONY: up
up:
	docker-compose up -d

.PHONY: reset
reset:
	docker-compose down && docker-compose up -d

.PHONY: restart
restart:
	docker-compose restart node

.PHONY: down
down:
	docker-compose down

.PHONY: logs
logs:
	docker-compose logs -f

.PHONY: ash
bash:
	docker-compose exec node ash

.PHONY: test
test:
	docker-compose exec node npm run test